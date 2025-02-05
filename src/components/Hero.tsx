import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-kany-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-kany-brown to-kany-orange transform -skew-y-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-kany-brown mt-16">
              African Stories, Brought to Life in Sharjah
            </h1>

            {/* First image (V1bis) - Full width */}
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-auto mb-8">
              <img
                src="fichier V1bis.jpg"
                alt="Global Publishing"
                className="w-full max-h-[500px] md:max-h-[600px] object-contain bg-gray-50"
              />
            </div>

            <p className="text-xl md:text-2xl text-kany-text max-w-3xl mx-auto mb-8">
              Discover the vibrant richness of African storytelling. Based in Sharjah, 
              we connect the heritage of African narratives with the global stage. 
              Explore stories that inspire, educate, and spark imagination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="/books"
              className="px-8 py-3 rounded-lg bg-kany-brown text-white font-medium hover:bg-kany-orange transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Our Books
            </a>
            <a
              href="/about"
              className="px-8 py-3 rounded-lg bg-kany-orange text-white font-medium hover:bg-kany-brown transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More About Us
            </a>
          </motion.div>

          {/* Second image (V1) - Full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-auto"
          >
            <img
              src="fichier_V1.jpeg"
              alt="African Stories"
              className="w-full max-h-[500px] md:max-h-[600px] object-contain bg-gray-50"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;