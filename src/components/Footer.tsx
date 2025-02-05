import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kany-brown text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-kany-gold">About Kany Publishing House</h3>
            <p className="text-sm">
              Bringing African stories to life in Sharjah, connecting cultures through literature.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-kany-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-kany-gold transition-colors">About Us</a></li>
              <li><a href="/books" className="hover:text-kany-gold transition-colors">Our Books</a></li>
              <li><a href="/explore" className="hover:text-kany-gold transition-colors">Explore</a></li>
              <li><a href="/contact" className="hover:text-kany-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-kany-gold">Contact Us</h3>
            <p className="text-sm">Sharjah Publishing City</p>
            <p className="text-sm">Free Zone, Sharjah, UAE</p>
            <p className="text-sm">Email: info@kany.ae</p>
            <p className="text-sm">Phone: +971 55 429 38 47</p>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-kany-gold">Stay Updated</h3>
            <p className="text-sm">Subscribe to our newsletter for updates and news.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md text-kany-text w-full focus:outline-none"
              />
              <button className="bg-kany-orange px-4 py-2 rounded-r-md hover:bg-kany-orange/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; 2024 Kany Publishing House. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-kany-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-kany-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-kany-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-kany-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;