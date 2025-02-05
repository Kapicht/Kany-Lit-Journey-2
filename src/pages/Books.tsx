import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Books = () => {
  return (
    <div className="min-h-screen bg-kany-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-kany-brown text-center mb-8">
            Our Books
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-kany-orange text-center mb-16">
            Current & Upcoming Titles
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-[16/9] relative">
              <img
                src="/placeholder.svg"
                alt="Tell Me About Timbuktu Book Cover"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-kany-brown">
                  Coming Soon: Tell Me About Timbuktu, an Illustrated Tale for Curious Minds
                </h3>
                <p className="text-lg text-kany-text italic">Ages 7-11</p>
                
                <p className="text-kany-text">
                  In the heart of the Sahara lies a city whispered about in legends, a city of golden sands, 
                  ancient wisdom, and hidden treasures. But what makes Timbuktu so special?
                </p>

                <p className="text-kany-text">
                  This fascinating tale about the mysterious city will take young readers on a journey through time, 
                  unveiling the secrets of Timbuktu, the legendary city of 333 Saints, scholars, and storytellers.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-kany-brown">Through enchanting tales and stunning illustrations, children will discover:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-kany-text">
                    <li>The great libraries that held thousands of handwritten manuscripts, filled with knowledge long before Europe's Renaissance</li>
                    <li>The brave travellers and traders who crossed the desert to reach this centre of learning</li>
                    <li>The griots and scholars who preserved Africa's rich history through poetry and storytelling</li>
                    <li>The legacy of Timbuktu and why it remains a symbol of wisdom, resilience, and culture today</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-kany-brown">Why this book matters:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-kany-text">
                    <li>Introduces young readers to a forgotten chapter of world history</li>
                    <li>Celebrates African intellectual heritage and oral tradition</li>
                    <li>Inspires curiosity about history, culture, and the power of knowledge</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-8">
                  <p className="text-lg font-semibold text-kany-brown">
                    Launch Date: April 2025 at the Sharjah Children's Reading Festival
                  </p>
                  <div className="mt-6">
                    <Button 
                      className="bg-kany-orange hover:bg-kany-orange/90 text-white"
                      disabled
                    >
                      Pre-orders coming soon!
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Books;