import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MeetTheCreativeMinds = () => {
  const team = [
    {
      id: 1,
      name: "Dr. Sarah Okonjo",
      role: "Chief Editor",
      bio: "With over 15 years of experience in African literature, Dr. Okonjo leads our editorial team with passion and expertise.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "James Mensah",
      role: "Creative Director",
      bio: "Award-winning designer specializing in bringing African stories to life through visual storytelling.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Amina Diallo",
      role: "Senior Author",
      bio: "Bestselling author of children's books that celebrate African culture and heritage.",
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
          Meet the Creative Minds
        </motion.h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-kany-brown mb-2">{member.name}</h3>
                <p className="text-kany-orange font-medium mb-2">{member.role}</p>
                <p className="text-kany-text mb-4">{member.bio}</p>
                <Button className="w-full bg-kany-brown hover:bg-kany-brown/90 text-white">
                  Read More
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

export default MeetTheCreativeMinds;