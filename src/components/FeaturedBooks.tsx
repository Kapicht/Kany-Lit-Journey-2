import { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Tales of the Sahara",
    author: "Amara Diallo",
    cover: "/placeholder.svg",
    description: "A collection of mystical stories from the heart of Africa.",
  },
  {
    id: 2,
    title: "Rivers of Gold",
    author: "Kwame Mensah",
    cover: "/placeholder.svg",
    description: "An epic journey through ancient African kingdoms.",
  },
  {
    id: 3,
    title: "The Lion's Pride",
    author: "Zara Okoro",
    cover: "/placeholder.svg",
    description: "A tale of family, tradition, and modern African life.",
  },
];

const FeaturedBooks = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-kany-orange/10 text-kany-orange rounded-full text-sm font-medium tracking-wide mb-4">
            Featured Books
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-kany-text mb-4">
            Discover Our Latest Releases
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Immerse yourself in captivating stories that celebrate African
            heritage and contemporary experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <div className="aspect-w-3 aspect-h-4 rounded-t-xl overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-kany-text mb-2">
                  {book.title}
                </h3>
                <p className="text-kany-orange mb-3">{book.author}</p>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <a
                  href={`/books/${book.id}`}
                  className="inline-flex items-center text-kany-brown hover:text-kany-orange transition-colors duration-200"
                >
                  Learn More
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                      hoveredBook === book.id ? "translate-x-1" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;