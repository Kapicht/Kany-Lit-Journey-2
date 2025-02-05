import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const resources = [
  {
    id: 1,
    title: "African Literature Guide",
    description: "A comprehensive guide to contemporary African literature and its themes.",
    image: "/placeholder.svg",
    link: "/resources/african-literature-guide",
  },
  {
    id: 2,
    title: "Publishing Workshop Materials",
    description: "Resources and materials from our publishing workshops and seminars.",
    image: "/placeholder.svg",
    link: "/resources/workshop-materials",
  },
  {
    id: 3,
    title: "Cultural Context Series",
    description: "Understanding the cultural context behind African storytelling.",
    image: "/placeholder.svg",
    link: "/resources/cultural-context",
  },
  {
    id: 4,
    title: "Author's Toolkit",
    description: "Essential resources for aspiring authors and storytellers.",
    image: "/placeholder.svg",
    link: "/resources/authors-toolkit",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-kany-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-kany-brown mb-4">Educational Resources</h1>
          <p className="text-kany-text max-w-2xl mx-auto">
            Explore our collection of educational resources designed to enhance your understanding of African literature and publishing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-kany-brown mb-2">{resource.title}</h3>
                <p className="text-kany-text mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-block bg-kany-brown text-white px-6 py-2 rounded-md hover:bg-kany-orange transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;