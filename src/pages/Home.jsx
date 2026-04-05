import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHandshake, FaUserTie, FaRegSmile, FaStar, FaHome, FaBuilding, FaChartLine } from "react-icons/fa";
import PropertyCard from "../components/PropertyCard";
import { propertiesData, testimonialsData } from "../data/mockData";

const stats = [
  { icon: <FaHome />, value: "500+", label: "Happy Families" },
  { icon: <FaBuilding />, value: "200+", label: "Premium Listings" },
  { icon: <FaChartLine />, value: "10+", label: "Years Experience" },
  { icon: <FaStar />, value: "4.9★", label: "Client Rating" },
];

const Home = () => {
  const featuredProperties = propertiesData.slice(0, 3);

  return (
    <div className="min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary font-semibold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Trusted Real Estate — Patna, Bihar
              </motion.span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
                Find Your{" "}
                <span className="text-secondary italic">Dream Home</span>{" "}
                in Patna &amp; Rajgir
              </h1>
              <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                We guide you towards the perfect investment, combining luxury, comfort, and unmatched transparency to help you secure a future for your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/properties" className="px-8 py-4 bg-secondary text-primary font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-2xl text-center text-sm uppercase tracking-wide">
                  Explore Properties
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 text-center text-sm uppercase tracking-wide">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-secondary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-secondary py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center text-primary text-xl shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-xs font-semibold text-primary/70 uppercase tracking-wide">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Company Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-stretch gap-0 rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto border border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
                alt="Modern luxury home"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 bg-white p-10 md:p-14 flex flex-col justify-center"
            >
              <span className="section-label">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mb-2">
                Building Trust, One Home at a Time
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                LaxmiGrih Properties Pvt. Ltd. represents the highest standards of the real estate industry in Bihar. Whether you are looking for a spacious family house, a modern flat, or a prime plot for investment in Patna or Rajgir, we dedicate ourselves to matching you with options that exceed your expectations.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group w-fit">
                Read More About Us
                <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Featured Properties */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-label">Exclusive Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Featured Properties</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/properties" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md hover:shadow-xl">
              View All 9 Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label text-secondary">Our Excellence</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Why Choose Us</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaShieldAlt />, title: "Trusted & Verified", desc: "Every property listing undergoes rigorous legal verification and background checks." },
              { icon: <FaHandshake />, title: "Transparent Deals", desc: "No hidden costs. Complete transparency throughout the transaction process." },
              { icon: <FaUserTie />, title: "Expert Guidance", desc: "Our seasoned real estate advisors offer tailored solutions for your unique needs." },
              { icon: <FaRegSmile />, title: "Customer First", desc: "A growing community of satisfied families and smart investors across Patna and Rajgir, Bihar." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 font-heading text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-label">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">What People Say</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonialsData.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary rounded-l-2xl" />
                {/* Stars */}
                <div className="flex gap-1 mb-4 ml-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-secondary text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-6 text-sm ml-4 flex-grow">"{review.feedback}"</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-5 ml-4">
                  <img src={review.image} alt={review.name} className="w-12 h-12 object-cover rounded-full ring-2 ring-secondary" />
                  <div>
                    <h4 className="font-bold text-primary text-sm">{review.name}</h4>
                    <p className="text-xs text-secondary font-semibold">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 relative bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label text-secondary justify-center flex">Take the Next Step</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Find Your New Home?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Connect with our expert consultants today. We're here to answer all your questions and help you make the best decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block px-10 py-4 bg-secondary text-primary font-bold rounded-xl text-base hover:bg-white transition-all duration-300 shadow-xl">
                Get in Touch Now
              </Link>
              <Link to="/properties" className="inline-block px-10 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-xl text-base hover:bg-white hover:text-primary transition-all duration-300">
                Browse Properties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
