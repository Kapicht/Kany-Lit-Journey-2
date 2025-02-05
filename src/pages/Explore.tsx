import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Country {
  id: string;
  name: string;
  coordinates: [number, number];
  literature: string;
  authors: string[];
}

const countries: Country[] = [
  {
    id: "nigeria",
    name: "Nigeria",
    coordinates: [9.082, 8.6753],
    literature: "Rich in storytelling traditions, Nigerian literature spans from oral folklore to contemporary novels.",
    authors: ["Chinua Achebe", "Wole Soyinka", "Chimamanda Ngozi Adichie"],
  },
  {
    id: "kenya",
    name: "Kenya",
    coordinates: [0.0236, 37.9062],
    literature: "Kenyan literature reflects the diversity of its people and landscapes.",
    authors: ["Ngũgĩ wa Thiong'o", "Grace Ogot", "Meja Mwangi"],
  },
  {
    id: "egypt",
    name: "Egypt",
    coordinates: [26.8206, 30.8025],
    literature: "Egyptian literature combines ancient traditions with modern storytelling.",
    authors: ["Naguib Mahfouz", "Taha Hussein", "Nawal El Saadawi"],
  },
];

const Explore = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div className="min-h-screen bg-kany-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-kany-brown text-center mb-16"
        >
          Explore African Literature
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="aspect-square bg-gray-100 rounded-lg relative">
              {/* Placeholder for the map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Coming Soon</p>
              </div>
              
              {/* Country Markers */}
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                    selectedCountry?.id === country.id
                      ? "bg-kany-orange"
                      : "bg-kany-brown"
                  } hover:bg-kany-orange transition-colors`}
                  style={{
                    left: `${((country.coordinates[1] + 180) * 100) / 360}%`,
                    top: `${((90 - country.coordinates[0]) * 100) / 180}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Country Information */}
          <AnimatePresence mode="wait">
            {selectedCountry ? (
              <motion.div
                key={selectedCountry.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-bold text-kany-brown mb-4">
                  {selectedCountry.name}
                </h2>
                <p className="text-kany-text mb-6">{selectedCountry.literature}</p>
                <h3 className="text-xl font-bold text-kany-brown mb-2">
                  Notable Authors
                </h3>
                <ul className="space-y-2">
                  {selectedCountry.authors.map((author) => (
                    <li
                      key={author}
                      className="text-kany-text"
                    >
                      {author}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center"
              >
                <p className="text-kany-text text-center">
                  Select a country on the map to learn about its literature and authors.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;