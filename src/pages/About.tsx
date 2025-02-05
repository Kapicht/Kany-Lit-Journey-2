import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-kany-background to-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section 1: Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-kany-brown mb-8">
            Rooted in Africa, Publishing for the World
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-80 rounded-xl overflow-hidden">
              <img
                src="visuel section 1.jpg"
                alt="African Roots"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg text-kany-text">
              Our publishing house is born from a love of African storytelling. Located in Sharjah, 
              a global hub for literature, we are a bridge connecting Africa's timeless narratives 
              to readers everywhere. Our mission is simple: to preserve African voices, inspire 
              young minds, and share diverse stories that matter.
            </p>
          </div>
        </motion.section>

        {/* Section 2: Mission, Vision, Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 bg-white/90 rounded-xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-kany-brown mb-6">Our Mission</h3>
              <p className="text-kany-text mb-8">
                We publish stories that carry the soul of Africa, from its ancient wisdom 
                to modern voices, bridging generations through literature and art.
              </p>
              
              <h3 className="text-3xl font-bold text-kany-brown mb-6">Our Vision</h3>
              <ul className="list-disc list-inside text-kany-text mb-8 space-y-2">
                <li>To become a leading voice in African publishing</li>
                <li>To nurture African writers & illustrators</li>
                <li>To preserve and share African cultural heritage through books</li>
                <li>To connect African stories with global audiences</li>
              </ul>

              <h3 className="text-3xl font-bold text-kany-brown mb-6">Our Values</h3>
              <ul className="list-disc list-inside text-kany-text space-y-2">
                <li>Authenticity: every story must reflect Africa's true spirit</li>
                <li>Excellence: we produce books of the highest quality</li>
                <li>Diversity: showcasing voices from all over the continent</li>
                <li>Education: promoting literacy, learning, and knowledge</li>
                <li>Innovation: blending tradition with modern storytelling</li>
              </ul>
            </div>
            <div className="h-full rounded-xl overflow-hidden">
              <img
                src="visuel section 2.jpg"
                alt="Our Values"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Section 3: Why Sharjah */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 bg-kany-brown/10 rounded-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 rounded-xl overflow-hidden">
              <img
                src="visuel section 3 _ Sharjah.jpg"
                alt="Sharjah"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-kany-brown mb-6">Why Sharjah?</h3>
              <p className="text-kany-text">
                Sharjah, UNESCO's World Book Capital, is the ideal base for our publishing house. 
                As a global cultural hub, it provides a platform to bring African stories to the 
                forefront of the literary world while fostering cross-cultural connections.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Meet the Founders */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-kany-brown text-center">Meet the Founders</h2>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-white hover:shadow-xl transition-shadow">
              <div className="h-[500px] overflow-hidden">
                <img
                  src="section_4_Kadiatou.jpg"
                  alt="Kadiatou Konaré"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-kany-brown mb-4">Kadiatou Konaré</h3>
                <p className="text-kany-text">
                  Co-founder and visionary leader of Kany Publishing House
                </p>
              </div>
            </div>

            <div className="bg-white hover:shadow-xl transition-shadow">
              <div className="h-[500px] overflow-hidden">
                <img
                  src="section _4_Hadja.jpg"
                  alt="Hadja D-Keita"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-kany-brown mb-4">Hadja D-Keita</h3>
                <p className="text-kany-text">
                  Writer, journalist, translator and educator from Mali. Passionate about 
                  storytelling and cultural preservation, she is dedicated to amplifying 
                  African voices, bridging tradition and modernity through literature, 
                  education, and the power of words.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default About;