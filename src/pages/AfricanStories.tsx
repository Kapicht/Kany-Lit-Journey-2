import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, History, Newspaper } from "lucide-react";
import OralTraditionArticle from "@/components/articles/OralTraditionArticle";
import GriotsArticle from "@/components/articles/GriotsArticle";
import KouyateArticle from "@/components/articles/KouyateArticle";
import WritersArticle from "@/components/articles/WritersArticle";

const AfricanStories = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const articles = [
    {
      id: "oral-tradition",
      title: "The Power of the Spoken Word",
      description: "Discover the importance of oral tradition in African culture",
      icon: BookOpen,
      Component: OralTraditionArticle,
    },
    {
      id: "griots",
      title: "The Keepers of Memory",
      description: "Explore the role of griots, poets, and historians in African culture",
      icon: Users,
      Component: GriotsArticle,
    },
    {
      id: "kouyate",
      title: "Keeper of the Word",
      description: "Learn about the legacy of Djeli Mamadou Kouyaté",
      icon: History,
      Component: KouyateArticle,
    },
    {
      id: "writers",
      title: "Voices of Africa",
      description: "Discover the pioneering women writers of African literature",
      icon: Newspaper,
      Component: WritersArticle,
    },
  ];

  const selectedArticleData = articles.find(a => a.id === selectedArticle);

  return (
    <div className="min-h-screen bg-kany-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-kany-text mb-6">
            African Stories & Traditions
          </h1>
          <p className="text-lg text-kany-text/80 max-w-3xl mx-auto">
            Discover the rich tapestry of African storytelling, from ancient oral traditions to modern narratives.
          </p>
        </motion.div>

        {!selectedArticle ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className="cursor-pointer h-full hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setSelectedArticle(article.id)}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <article.icon className="h-12 w-12 text-kany-brown mb-4" />
                    <h3 className="text-xl font-semibold text-kany-text mb-2">{article.title}</h3>
                    <p className="text-kany-text/80">{article.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="space-y-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-kany-brown hover:text-kany-orange transition-colors mb-8 flex items-center gap-2"
            >
              ← Back to Articles
            </button>
            {selectedArticleData && <selectedArticleData.Component />}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AfricanStories;