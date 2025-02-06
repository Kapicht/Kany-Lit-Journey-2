import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="kany-logo.jpg" 
                alt="Kany Publishing House" 
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/african-stories">African Stories and Traditions</NavLink>
            <NavLink href="/books">Our Books</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-kany-brown hover:text-kany-orange transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/about">About</MobileNavLink>
              <MobileNavLink href="/african-stories">African Stories and Traditions</MobileNavLink>
              <MobileNavLink href="/books">Our Books</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    to={href}
    className="text-kany-text hover:text-kany-orange transition-colors duration-200 text-sm font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    to={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-kany-text hover:text-kany-orange transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Navbar;