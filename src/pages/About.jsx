import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Header Banner */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">About Us</h1>
            <p className="text-secondary font-medium tracking-wide">LaxmiGrih Properties Pvt. Ltd.</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-0 items-stretch rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="md:w-1/2 flex"
            >
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury living space"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="md:w-1/2 bg-white p-10 md:p-14 flex flex-col justify-center"
            >
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2 leading-tight">
                Redefining Real Estate Excellence
              </h2>
              <div className="w-16 h-1 bg-secondary mb-6 mt-1"></div>
              <p className="text-gray-600 leading-relaxed mb-5 text-base">
                At LaxmiGrih Properties Pvt. Ltd., we understand that buying a property is one of the most significant decisions of your life. We are more than just property dealers — we are your dedicated consultants, striving to bring you spaces that resonate with your dreams and lifestyle.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                With years of experience in the real estate market, our expert team curates premium verified listings. Whether you're searching for an elegant family home, a high-yield commercial investment, or a peaceful residential plot, we prioritize your needs, focusing on transparency, trust, and lasting customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-primary text-white p-10 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-secondary">Our Mission</h3>
              <p className="text-xl leading-relaxed font-serif italic text-gray-200">
                "To help people find not just houses, but homes."
              </p>
              <p className="mt-4 text-gray-300">
                We dedicate ourselves to simplifying the complex process of buying and selling. We aim to deliver unparalleled service that empowers our clients to make informed, highly confident decisions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary text-primary p-10 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-xl leading-relaxed font-serif italic text-primary/90">
                "To become a universally trusted name in real estate across India."
              </p>
              <p className="mt-4 font-medium text-primary/80">
                To set a benchmark for quality and sincerity in the real estate sector. We envision a future where finding the perfect property is a joyful and transparent experience for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">Our Pillars</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12">Core Values</h2>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded shadow border border-gray-100">
              <div className="text-4xl text-secondary mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Trust</h3>
              <p className="text-gray-600 text-sm">Building enduring relationships founded on honesty, reliability, and delivering on our promises.</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded shadow border border-gray-100">
              <div className="text-4xl text-secondary mb-4">🔍</div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Transparency</h3>
              <p className="text-gray-600 text-sm">Complete openness regarding property details, pricing, and all legal documentation processes.</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded shadow border border-gray-100">
              <div className="text-4xl text-secondary mb-4">⭐</div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Customer Satisfaction</h3>
              <p className="text-gray-600 text-sm">Prioritizing the buyer's needs and happiness above a simple sale, ensuring a smooth transition.</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
