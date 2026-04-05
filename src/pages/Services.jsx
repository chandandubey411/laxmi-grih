import { motion } from "framer-motion";
import { FaHome, FaTag, FaChartLine, FaCommentsDollar, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaHome />,
    title: "Buying Assistance",
    desc: "Finding the right property can be overwhelming. We streamline the buying process by identifying properties that match your criteria, offering guided site visits, and assisting with negotiations to ensure you get the best value for your investment.",
    features: ["Personalized property matching", "Guided tours and site visits", "Legal & documentation verification"],
    border: "border-secondary",
    iconBg: "bg-secondary/10 group-hover:bg-secondary",
    iconColor: "text-secondary group-hover:text-primary",
  },
  {
    icon: <FaTag />,
    title: "Selling Support",
    desc: "Sell your property quickly and efficiently at the best market price. We utilize our extensive network and advanced marketing tools to ensure your listing receives maximum visibility.",
    features: ["Market valuation & pricing strategy", "Premium listing placement", "Buyer screening and negotiation"],
    border: "border-primary",
    iconBg: "bg-primary/10 group-hover:bg-primary",
    iconColor: "text-primary group-hover:text-white",
  },
  {
    icon: <FaChartLine />,
    title: "Investment Advisory",
    desc: "Maximize your returns with expert-backed property investments. We analyze market trends, predict growth corridors, and identify high-yield commercial and residential opportunities tailored to your risk appetite.",
    features: ["Risk analysis & ROI projection", "Identification of growth sectors", "Portfolio diversification strategies"],
    border: "border-secondary",
    iconBg: "bg-secondary/10 group-hover:bg-secondary",
    iconColor: "text-secondary group-hover:text-primary",
  },
  {
    icon: <FaCommentsDollar />,
    title: "Property Consultation",
    desc: "Have questions about market conditions, property taxes, or legal disputes? Our seasoned consultants provide clear, objective, and expert advice to bring clarity to the complex world of real estate.",
    features: ["Real estate market insights", "Tax compliance and regulatory advice", "Dispute resolution guidance"],
    border: "border-primary",
    iconBg: "bg-primary/10 group-hover:bg-primary",
    iconColor: "text-primary group-hover:text-white",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-light">

      {/* Header Banner */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label text-secondary justify-center flex">What We Offer</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Services</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Comprehensive real estate solutions tailored to your unique requirements across Delhi NCR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-400 border-l-4 ${service.border} group`}
              >
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}>
                  <span className={`text-2xl ${service.iconColor} transition-all duration-300`}>{service.icon}</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{service.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <FaCheckCircle className="text-secondary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider hover:text-primary transition-colors group/link"
                >
                  Get Started
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <span className="section-label justify-center flex">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">How It Works</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-2 mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0" />
            {[
              { step: "01", title: "Consult", desc: "Share your requirements with our expert team." },
              { step: "02", title: "Explore", desc: "We curate a personalized list of matching properties." },
              { step: "03", title: "Visit", desc: "We arrange guided site visits at your convenience." },
              { step: "04", title: "Close", desc: "We assist with documentation and a smooth handover." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-lg mb-4 shadow-lg border-4 border-white">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Not Sure Where to Start?</h2>
          <p className="text-primary/80 max-w-xl mx-auto mb-8">
            Schedule a free consultation with our experts and let us chart the best course of action for your real estate journey.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-dark transition-colors shadow-lg text-sm uppercase tracking-wide">
            Request a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
