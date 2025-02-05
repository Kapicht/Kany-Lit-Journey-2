import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    newReleases: true,
    events: true,
    newsletter: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for signing up for updates.",
    });
    
    setIsLoading(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-kany-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-kany-brown mb-4">Stay Updated</h1>
            <p className="text-kany-text">
              Sign up to receive the latest updates from Kany Publishing House about new releases, events, and more.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-kany-text mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-kany-brown focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-kany-brown">Update Preferences</h3>
              <div className="space-y-2">
                {Object.entries(preferences).map(([key, value]) => (
                  <label key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => setPreferences({ ...preferences, [key]: !value })}
                      className="rounded border-gray-300 text-kany-brown focus:ring-kany-brown"
                    />
                    <span className="text-kany-text">
                      {key === "newReleases"
                        ? "New Book Releases"
                        : key === "events"
                        ? "Events and Workshops"
                        : "Monthly Newsletter"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-kany-brown text-white py-3 rounded-md hover:bg-kany-orange transition-colors ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Signing up..." : "Sign Up for Updates"}
            </button>

            <p className="text-sm text-gray-500 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;