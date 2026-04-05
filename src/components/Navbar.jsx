import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { closeMenu(); }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Strip */}
      <div className="hidden md:block bg-primary text-gray-300 text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>📍 Indirapuram, Ghaziabad | Serving entire Delhi NCR</span>
          <div className="flex items-center gap-6">
            <a href="tel:8269505757" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <FaPhoneAlt className="text-secondary" /> 8269505757
            </a>
            <a href="mailto:Laxmigrihpropertiespvtltd@gmail.com" className="hover:text-secondary transition-colors">
              Laxmigrihpropertiespvtltd@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-xl py-2 border-b-2 border-secondary"
            : "bg-white/98 backdrop-blur-md py-3 border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src="/logo.png" alt="LaxmiGrih Properties Logo" className="h-10 md:h-12 w-auto object-contain" />
            <div>
              <h1 className="font-heading font-bold text-lg md:text-xl text-primary leading-tight">LaxmiGrih</h1>
              <p className="text-[9px] text-secondary font-bold uppercase tracking-widest">Properties Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-medium text-sm transition-colors rounded-md group ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-primary hover:text-secondary"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-secondary transition-all duration-300 ${
                  location.pathname === link.path ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 bg-secondary text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <ul className="flex flex-col py-4 px-4 gap-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`flex items-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${
                        location.pathname === link.path
                          ? "bg-primary/5 text-secondary border-l-4 border-secondary"
                          : "text-primary hover:bg-gray-50"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/contact"
                    className="block text-center mt-2 px-6 py-3 bg-secondary text-primary font-bold rounded-lg shadow-md"
                    onClick={closeMenu}
                  >
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
