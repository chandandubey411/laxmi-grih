import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-light">
      {/* Main Footer */}
      <div className="pt-16 pb-8 border-t-4 border-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl inline-flex mb-6 shadow-md">
                <img src="/logo.png" alt="LaxmiGrih Properties Logo" className="h-10 w-auto" />
                <div>
                  <h2 className="font-heading font-bold text-primary text-lg leading-tight">LaxmiGrih</h2>
                  <p className="text-[9px] text-secondary font-bold uppercase tracking-widest">Properties Pvt. Ltd.</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                To help people find not just houses, but homes. We are your trusted partner in fulfilling your real estate dreams with transparency and expert guidance.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebookF />, href: "#" },
                  { icon: <FaInstagram />, href: "#" },
                  { icon: <FaWhatsapp />, href: "https://wa.me/918269505757" },
                  { icon: <FaLinkedinIn />, href: "#" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary text-white text-sm transition-all duration-300 hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2 pb-1">Quick Links</h3>
              <div className="w-10 h-0.5 bg-secondary mb-5" />
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Properties", path: "/properties" },
                  { name: "Our Services", path: "/services" },
                  { name: "Contact Us", path: "/contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-secondary text-sm transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-secondary transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2 pb-1">Our Services</h3>
              <div className="w-10 h-0.5 bg-secondary mb-5" />
              <ul className="space-y-3">
                {["Buying Assistance", "Selling Support", "Investment Advisory", "Property Consultation"].map((s) => (
                  <li key={s} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Property Types */}
              <h3 className="font-heading font-semibold text-lg text-white mt-6 mb-2 pb-1">Property Types</h3>
              <div className="w-10 h-0.5 bg-secondary mb-5" />
              <div className="flex flex-wrap gap-2">
                {["House", "Flat", "Plot"].map((t) => (
                  <span key={t} className="text-xs text-gray-300 border border-white/20 px-2.5 py-1 rounded-full hover:border-secondary hover:text-secondary transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2 pb-1">Contact Us</h3>
              <div className="w-10 h-0.5 bg-secondary mb-5" />
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-gray-400">
                  <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Raushan House, A-8, Ekta Vihar Ln, Ramkrishan Nagar, Patna, Bihar 800027
                  </span>
                </li>
                <li>
                  <a href="tel:8269505757" className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors text-sm group">
                    <FaPhoneAlt className="text-secondary group-hover:scale-110 transition-transform" />
                    8269505757
                  </a>
                </li>
                <li>
                  <a href="mailto:Laxmigrihpropertiespvtltd@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-secondary transition-colors text-sm group">
                    <FaEnvelope className="text-secondary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="break-all">Laxmigrihpropertiespvtltd@gmail.com</span>
                  </a>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918269505757"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
              >
                <FaWhatsapp className="text-base" /> Chat on WhatsApp
              </a>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LaxmiGrih Properties Pvt. Ltd. All Rights Reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Serving Patna &amp; Bihar — Ramkrishan Nagar · Kankarbagh · Boring Road · Bailey Road · Rajgir
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
