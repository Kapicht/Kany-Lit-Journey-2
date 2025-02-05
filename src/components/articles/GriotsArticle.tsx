import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const GriotsArticle = () => {
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Share this article with others interested in African storytelling.",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="prose prose-lg max-w-none text-kany-text/90"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="bg-kany-brown/5">
          <CardTitle className="text-3xl text-kany-text flex items-center gap-3">
            <Users className="h-8 w-8 text-kany-brown" />
            The Keepers of Memory: The Role of Griots, Poets, and Historians
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-auto mb-8"
          >
            <img
              src="Toumani Diabaté_griot.jpg"
              alt="African Storyteller"
              className="w-full max-h-[600px] object-contain hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl leading-relaxed">
              In Africa, history is not locked away in books. It lives, breathes, and speaks through 
              the voices of griots, poets, and historians—the guardians of time. They do not simply 
              tell stories; they carry the weight of empires, the wisdom of ancestors, and the pulse 
              of nations. Without them, the past would fade, and the future would be built on silence.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-kany-orange/5 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-kany-brown mb-4">Who are the griots?</h2>
            <p>
              Griots are the living archives of African societies. In Mali, they are called jeli, 
              in Senegal, gawlo, in Nigeria, akewi, but across the continent, their role is the same: 
              to preserve, recite, and pass down history through generations.
            </p>
            <ul className="list-none space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <span className="text-kany-orange">•</span> Historians: remembering lineages, battles, and great rulers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-kany-orange">•</span> Poets: turning history into rhythm and rhyme, making it unforgettable
              </li>
              <li className="flex items-center gap-2">
                <span className="text-kany-orange">•</span> Musicians: singing the past into the present, accompanied by the kora, balafon, or drums
              </li>
              <li className="flex items-center gap-2">
                <span className="text-kany-orange">•</span> Social commentators: advising leaders, critiquing injustices, and keeping rulers accountable
              </li>
            </ul>

            <ul className="list-none space-y-3 mt-4">
            <p>
            A true griot's memory is sharper than ink: they can recite dynasties, treaties, and events with breathtaking accuracy. Before colonization and written archives, griots ensured that no history was ever lost, no king ever forgotten, and no lesson ever erased.
            </p>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-kany-brown mb-4">The poets: voices of the people</h2>
            <p>
              While griots focus on history, African poets breathe emotion, resistance, and revolution 
              into words. Poetry in Africa has never been mere entertainment, it has always been a weapon, 
              a mirror, a heartbeat.
            </p>
            <p className="mt-4">
              Poets have stood before kings, challenging their rule with words sharper than swords. 
              They have led rebellions, turning pain into power. They have sung of love, exile, and hope, 
              ensuring that every victory and suffering is immortalized in verse.
            </p>
            <p className="mt-4">
            From the oral praises of ancient empires to the modern voices of Léopold Sédar Senghor, Chinua Achebe, and Niyi Osundare, African poets continue to shape the soul of the continent
            </p>
              
            
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-kany-brown mb-4">The historians: guardians of truth</h2>
            <p>
              If griots are the memory and poets the emotion, historians are the architects of Africa's 
              narrative. For too long, Africa's history was told by outsiders who erased, distorted, 
              or diminished its greatness.
            </p>
            <p className="mt-4">
            But true African historians fight to reclaim the past. They dig through ancient manuscripts in Timbuktu, piece together oral traditions, and uncover the forgotten kingdoms that once ruled the continent. They remind the world that Africa was home to great universities, mathematicians, astronomers, and traders long before colonial borders were drawn.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-kany-brown/5 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-kany-brown mb-4">Why their role still matters today</h2>
            <div className="space-y-2">
              <p>Some say griots belong to the past. They are wrong. The role of griots, poets, and historians is more important now than ever.</p>
              <ul className="list-none space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> In an age of digital overload, we must protect and document our true history.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> In a world where voices are silenced, we must uplift those who speak truth.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> In an era where African stories are still underrepresented, we must tell our own.
                </li>
              </ul>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="border-t border-kany-brown/10 pt-6 mt-8"
          >
            <p className="italic text-kany-text/80">
              At Kany Publishing, we stand on the shoulders of griots, poets, and historians. 
              We believe that words are power, and through our books, we carry forward the tradition 
              of those who have kept Africa's legacy alive for centuries.
            </p>
            <p className="font-semibold mt-4">Because a story untold is a world forgotten.</p>
            
            <div className="flex justify-between items-center mt-6">
              <p className="text-kany-brown">
                #KeepTheStoryAlive
              </p>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-kany-brown hover:text-kany-orange transition-colors"
              >
                <Share2 className="h-5 w-5" />
                Share this article
              </button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.article>
  );
};

export default GriotsArticle;