import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const KouyateArticle = () => {
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="prose prose-lg max-w-none"
    >
      <Card className="overflow-hidden bg-white shadow-lg">
        <CardHeader className="bg-gradient-to-r from-kany-brown/10 to-kany-orange/5">
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl text-kany-text flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-kany-brown" />
              Keeper of the Word: The Legacy of Djeli Mamadou Kouyaté
            </CardTitle>
            <button
              onClick={handleShare}
              className="p-2 hover:bg-kany-brown/10 rounded-full transition-colors"
              aria-label="Share article"
            >
              <Share2 className="h-5 w-5 text-kany-brown" />
            </button>
          </div>
        </CardHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative h-auto overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-kany-brown/20 to-kany-brown/5 group-hover:scale-105 transition-transform duration-300" />
          <img
            src="griot.jpg"
            alt="Djeli Mamadou Kouyaté"
            className="w-full max-h-[600px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <CardContent className="space-y-6 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-kany-text/90"
          >
            <p className="text-lg leading-relaxed">
            If Africa's history had a voice, it would sound like Djeli Mamadou Kouyaté. A name carved into the soul of West African storytelling, he was a master griot of the Mandinka people, a living library who carried the epics of kings, warriors, and empires. Without him, the world might have never known the Epic of Sundiata, the legendary tale of the lion-hearted founder of the Mali Empire.
            </p>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-semibold text-kany-brown mt-8 mb-4"
            >
              The man who carried an empire in his voice
            </motion.h3>
            <p>
              Djeli Mamadou Kouyaté was not just a storyteller, he was a guardian of memory, a bridge between 
              past and present. For generations, his ancestors had been the griots of Mali's royal courts, 
              entrusted with the sacred duty of preserving and performing history.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-kany-brown/5 p-6 rounded-lg my-8"
            >
              <h4 className="text-xl font-semibold text-kany-brown mb-4">His most famous recitation</h4>
              <p>
                The Epic of Sundiata, a story of betrayal, exile, prophecy, and triumph. Through his words, 
                the world learned about Sundiata Keita: the boy king, once crippled, who rose to build the 
                Mali Empire. Through his words, the world learned about:
              </p>

              <ul className="list-none space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> Sundiata Keita: the boy king, once crippled, who rose to build the Mali Empire</li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> The secrets of Mali's Power : a kingdom of gold, wisdom, and vast influence</li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span>	The magic of words: how prophecy and griots shaped the destiny of rulers</li>
              </ul>

              <p>But his legacy was not just about Sundiata. Djeli Mamadou Kouyaté and his fellow griots ensured that the history of Mali, the wisdom of ancestors, and the spirit of Africa would never be erased.</p>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="text-2xl font-semibold text-kany-brown mt-8 mb-4"
            >
              A voice that still echoes today
            </motion.h3>
            <p>
              Even centuries later, his words live on. His oral recitations became the foundation for one of the 
              most important written African epics. His storytelling techniques continue to inspire modern poets, 
              spoken-word artists, and musicians. His spirit exists in every African griot who picks up a kora or stands before an audience to keep history alive.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-kany-gold/10 p-6 rounded-lg my-8"
            >
              <h4 className="text-xl font-semibold text-kany-brown mb-2">Did You Know?</h4>
              <p className="text-kany-text/80">
                The Kouyaté family still exists today, and many remain griots, carrying on this unbroken chain 
                of storytelling!
              </p>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="text-2xl font-semibold text-kany-brown mt-8 mb-4"
            >
              Why we must keep the griot's fire burning
            </motion.h3>
            <p>
            To honor Djeli Mamadou Kouyaté is to honor all African griots, poets, and historians who have fought not with weapons, but with words. They remind us that:
            </p>
            <ul className="list-none space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> History is not just written, it is spoken, sung, and felt</li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> A society without griots is a society without memory</li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span>	Africa's greatest stories are still being told, will you listen?</li>
              </ul>
            <p className="mt-4">
              At Kany Publishing, we carry forward the legacy of Djeli Mamadou Kouyaté and all the griots who 
              came before us. Because as long as a story is told, it never dies.
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.article>
  );
};

export default KouyateArticle;