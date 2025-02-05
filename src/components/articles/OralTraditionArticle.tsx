import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const OralTraditionArticle = () => {
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText("#TellYourStory");
    toast({
      title: "Hashtag copied!",
      description: "Share your story on social media with #TellYourStory",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="overflow-hidden bg-white/80 backdrop-blur-sm">
        <CardHeader className="relative">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-video w-full overflow-hidden rounded-t-lg"
          >
            <img
              src="spotlight on african storytelling.jpg"
              alt="African Storytelling"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <CardTitle className="text-3xl md:text-4xl text-kany-brown flex items-center gap-3 mt-6">
              <BookOpen className="h-8 w-8 text-kany-orange" />
              The Power of the Spoken Word
            </CardTitle>
            <p className="text-xl text-kany-text/80 mt-2">
              The Importance of Oral Tradition in African Culture
            </p>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-6 p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg max-w-none text-kany-text/90"
          >
            <p className="text-lg leading-relaxed">
              In Africa, stories are not just stories—they are bridges between generations, guardians of history, 
              and vessels of identity. Long before written books filled libraries, African knowledge, wisdom, 
              and history were passed down from mouth to ear, heart to heart. This is the essence of oral tradition, 
              a living force that continues to shape the continent's cultural heritage.
            </p>

            <h3 className="text-2xl font-semibold text-kany-brown mt-8">A Legacy Written in Sound, Not Ink</h3>
            <p className="text-lg leading-relaxed">
              For centuries, African societies have relied on griots, poets, elders, and storytellers to keep 
              history alive. These keepers of memory are more than just entertainers; they are historians, 
              teachers, and social mediators, preserving the voices of the past so they may guide the future.
            </p>
            <p className="text-lg leading-relaxed">
              Unlike written records, oral tradition is fluid, interactive, and evolving. Every retelling of a 
              story adapts to the audience, incorporating new lessons while staying true to its roots. This 
              dynamic storytelling tradition has ensured that Africa's most profound knowledge survives, even 
              in times of upheaval and change.
            </p>

            <h3 className="text-2xl font-semibold text-kany-brown mt-8">Why Oral Tradition Matters Today</h3>
            <div className="space-y-4">
              <div className="pl-6 border-l-4 border-kany-orange">
                <h4 className="text-xl font-semibold text-kany-brown">1. Preserving History Beyond Books</h4>
                <p>
                  Many African civilizations, from the Mali Empire to the Kingdom of Ghana, did not rely on 
                  written texts to record history. Instead, griots (oral historians) memorized and recited entire genealogies, royal histories, and sacred proverbs—ensuring that knowledge was never lost, even when written records faded.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-kany-orange">
                <h4 className="text-xl font-semibold text-kany-brown">2. Passing Down Cultural Identity</h4>
                <p>
                A proverb says, “When an elder dies, a library burns.” African oral traditions ensure that no library is lost. Through folktales, proverbs, and legends, children learn who they are, where they come from, and what their ancestors believed in—creating a sense of belonging that no book alone can provide.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-kany-orange">
                <h4 className="text-xl font-semibold text-kany-brown">3. Education Through Storytelling</h4>
                <p>
                Before classrooms and textbooks, African children learned values, morals, and life skills through stories with hidden wisdom. Whether it’s the clever Anansi the Spider outwitting his enemies or the wise hare teaching patience, these tales teach resilience, wisdom, and the power of wit over strength.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-kany-orange">
                <h4 className="text-xl font-semibold text-kany-brown">4. Strengthening Community Bonds</h4>
                <p>
                Oral storytelling is not a solitary act—it is an experience shared around the fire, in village squares, at family gatherings. It strengthens communities by reinforcing shared values, promoting unity, and reminding people of their collective past.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-kany-orange">
                <h4 className="text-xl font-semibold text-kany-brown">5. Inspiring Modern African Literature & Music</h4>
                <p>
                Africa’s rich oral traditions are the foundation of its modern literature, spoken word poetry, hip-hop, and Afrobeats music. The rhythm of the griots can be heard in the beats of today’s artists, proving that storytelling has simply transformed, not disappeared.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-kany-brown mt-8">
              The Future of Oral Tradition: Keeping the Flame Alive
            </h3>
            <p className="text-lg leading-relaxed">
              As the world moves toward digital communication, the challenge is not losing Africa's oral tradition 
              but adapting it. Today, storytellers, educators, and writers are finding new ways to blend oral 
              tradition with modern platforms—recording griots, creating animated folktales, and even integrating 
              traditional proverbs into digital storytelling.
            </p>
            <p className="italic text-kany-text/80">
            At Kany Publishing, we honor this legacy by bringing African stories to life, ensuring that the voices of the past continue to inspire the future.
            </p>
            <div className="bg-kany-brown/5 p-6 rounded-lg mt-8">
              <p className="text-xl font-semibold text-kany-brown italic">
                "Because in Africa, words are not just spoken, they are woven into the soul of a people."
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <p className="text-kany-text/80 italic">
                Have you heard an African tale that stayed with you forever?
              </p>
              <Button
                onClick={handleShare}
                className="bg-kany-orange hover:bg-kany-orange/90 text-white flex items-center gap-2"
              >
                Share Your Story <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.article>
  );
};

export default OralTraditionArticle;