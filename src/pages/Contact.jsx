import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone 1",
    value: "8269505757",
    link: "tel:8269505757",
    linkLabel: "8269505757",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone 2",
    value: "9693728948",
    link: "tel:9693728948",
    linkLabel: "9693728948",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "Laxmigrihpropertiespvtltd@gmail.com",
    link: "mailto:Laxmigrihpropertiespvtltd@gmail.com",
    linkLabel: "Laxmigrihpropertiespvtltd@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    value: "Raushan House, A-8, Ekta Vihar Ln, East Ram Krishna Nagar, Ramkrishan Nagar, Patna, Bihar 800027",
    link: null,
    linkLabel: null,
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM",
    link: null,
    linkLabel: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);
  const [resultMessage, setResultMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    const dataString = new FormData();
    dataString.append("access_key", "7bd005bc-5c4a-4e83-b14a-2f0a90dd526c");
    dataString.append("name", formData.name);
    dataString.append("email", formData.email);
    dataString.append("phone", formData.phone);
    dataString.append("message", formData.message);
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: dataString });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setResultMessage("Message sent successfully! Our team will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setResultMessage(data.message || "An error occurred while sending the message.");
      }
    } catch {
      setStatus("error");
      setResultMessage("Network error. Please try again later.");
    }
  };

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-white transition-all duration-200 placeholder-gray-400";

  return (
    <div className="min-h-screen bg-light">

      {/* Header Banner */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label text-secondary justify-center flex">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              We are here to help. Reach out for any property-related inquiries, site visits, or consultations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-10 items-start">

            {/* Left — Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-5"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">Let's Connect</h2>
                <div className="w-12 h-1 bg-secondary mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  Have a question about a property or need expert guidance? Connect with LaxmiGrih Properties today.
                </p>
              </div>

              {contactDetails.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-11 h-11 bg-primary/8 rounded-xl flex items-center justify-center shrink-0 text-secondary text-base">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm mb-1">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-gray-500 text-xs hover:text-secondary transition-colors break-all leading-relaxed">
                        {item.linkLabel}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-xs leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp Buttons */}
              <a
                href="https://wa.me/918269505757"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-2xl transition-colors shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp: 8269505757
              </a>
              <a
                href="https://wa.me/919693728948"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-2xl transition-colors shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp: 9693728948
              </a>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3 bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
            >
              <h3 className="text-2xl font-heading font-bold text-primary mb-1">Send Us a Message</h3>
              <div className="w-10 h-1 bg-secondary mb-6" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleInputChange} required
                      className={inputClass} placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                      className={inputClass} placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className={inputClass} placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Message *</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleInputChange} required rows="5"
                    className={`${inputClass} resize-none`}
                    placeholder="I am interested in a 3BHK flat in Noida..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : "Submit Inquiry"}
                </button>

                {status === "success" && (
                  <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-sm text-center font-medium">
                    ✅ {resultMessage}
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl text-sm text-center font-medium">
                    ❌ {resultMessage}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.86071080972!2d85.14200457517664!3d25.5763004774689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a739163470a5%3A0x211bcb7e558944a6!2sLaxmigrih%20Properties%20Private%20Limited!5e0!3m2!1sen!2sin!4v1775373556840!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LaxmiGrih Location Map"
        />
      </section>

    </div>
  );
};

export default Contact;
