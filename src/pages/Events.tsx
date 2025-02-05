import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "African Literature Festival 2024",
      date: "June 15-17, 2024",
      location: "Sharjah Cultural Palace",
      description: "Join us for three days of celebrating African literature, featuring readings, panel discussions, and workshops.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Children's Book Reading Session",
      date: "July 5, 2024",
      location: "Kany Publishing House",
      description: "A special reading session for children featuring our latest African folktales collection.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Author Meet & Greet",
      date: "August 20, 2024",
      location: "Sharjah Public Library",
      description: "Meet our talented authors and get your books signed at this exclusive event.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-kany-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-kany-brown text-center mb-12"
        >
          Upcoming Events
        </motion.h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-kany-brown mb-2">{event.title}</h3>
                <p className="text-kany-text mb-2">{event.date}</p>
                <p className="text-kany-text mb-2">{event.location}</p>
                <p className="text-kany-text mb-4">{event.description}</p>
                <Button className="w-full bg-kany-orange hover:bg-kany-orange/90 text-white">
                  Register Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;