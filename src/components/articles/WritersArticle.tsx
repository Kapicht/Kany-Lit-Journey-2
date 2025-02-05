import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const WritersArticle = () => {
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Share these inspiring stories with others.",
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
            <BookOpen className="h-8 w-8 text-kany-brown" />
            Voices of Africa: Literary Pioneers
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
              src="Aminata Sow Fall.jpg"
              alt="African Writers"
              className="w-full max-h-[600px] object-contain hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Aminata Sow Fall Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-kany-orange/5 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-kany-brown mb-4">
              Aminata Sow Fall: The Trailblazer of African Literature
            </h2>
            <p className="mb-4">
              Aminata Sow Fall, a literary pioneer from Senegal, is a name that commands 
              respect in the world of African literature. As the first Francophone African 
              woman novelist, she broke barriers with her storytelling, blending realism, 
              social critique, and African wisdom.
            </p>
            <p className="mb-4">
              Her groundbreaking novel, "The Beggar's Strike" (La Grève des Bàttu), 
              challenges power, morality, and social justice in post-independence Africa. 
              With a sharp pen and an unshakable voice, she exposes the struggles of the 
              marginalized while celebrating the resilience of African societies.
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-kany-brown mb-2">Why she matters:</h3>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> First Francophone African woman to gain international recognition
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> Her novels tackle themes of power, corruption, and human dignity
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> A champion of African languages, literature, and storytelling
                </li>
              </ul>
            </div>
            <p className="mt-4 italic">
              Aminata Sow Fall remains a literary griot, proving that African stories are 
              not just written—they are weapons of truth.
            </p>
          </motion.section>

          {/* Second Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative h-auto my-8"
          >
            <img
              src="Laila Abouzeid.jpg"
              alt="Moroccan Culture and Literature"
              className="w-full max-h-[600px] object-contain hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Leila Abouzeid Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-kany-brown/5 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-kany-brown mb-4">
              Leila Abouzeid: The Pen that Reclaimed Morocco's Voice
            </h2>
            <p className="mb-4">
              Leila Abouzeid is one of Morocco's most celebrated female writers and a 
              pioneer of modern Arabic-language literature. She is best known for "The Year 
              of the Elephant" (Am al-Fil), a novel that captures Morocco's post-colonial 
              struggles and the personal journey of a woman fighting for her identity, 
              freedom, and place in a rapidly changing society.
            </p>
            <p className="mb-4">
              Unlike many Moroccan writers who choose to write in French, Abouzeid boldly 
              writes in Arabic, reclaiming the language as a powerful tool of storytelling 
              and cultural preservation. Her works often explore themes of colonial 
              resistance, gender roles, and the clash between tradition and modernity in 
              North Africa.
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-kany-brown mb-2">Why she matters:</h3>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> One of the first Moroccan women to publish fiction in Arabic
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> Her work highlights women's struggles, independence, and resilience
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-kany-orange">•</span> A literary voice that bridges Moroccan tradition with contemporary realities
                </li>
              </ul>
            </div>
            <p className="mt-4 italic">
              Leila Abouzeid's storytelling is both intimate and political, reminding us 
              that history is not just lived, it is felt, remembered, and rewritten through 
              the voices of those who refuse to be silenced.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="border-t border-kany-brown/10 pt-6 mt-8"
          >
            <div className="flex justify-between items-center">
              <p className="text-kany-brown">
                #AfricanVoices #LiteraryPioneers
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

export default WritersArticle;