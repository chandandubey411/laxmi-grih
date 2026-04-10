import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);
  const [resultMessage, setResultMessage] = useState("");

  // Handle delay and sessionStorage
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("laxmigrih_popup_shown");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("laxmigrih_popup_shown", "true");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
        setResultMessage("Message sent successfully! We will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        // Optionally close modal after success
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setStatus("error");
        setResultMessage(data.message || "An error occurred.");
      }
    } catch {
      setStatus("error");
      setResultMessage("Network error. Please try again.");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-white transition-all duration-200 placeholder-gray-400";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleOverlayClick}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl relative overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              <FaTimes size={18} />
            </button>

            {/* Header */}
            <div className="bg-primary px-8 py-6 text-center">
              <h3 className="text-2xl font-heading font-bold text-white">Get in Touch</h3>
              <p className="text-gray-300 text-sm mt-1">Book a free property consultation today.</p>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name *</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleInputChange} required
                      className={inputClass} placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone *</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                      className={inputClass} placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className={inputClass} placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleInputChange} required rows="3"
                    className={`${inputClass} resize-none`}
                    placeholder="I am interested in..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : "Submit Inquiry"}
                  </button>
                </div>

                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-green-50 text-green-700 border border-green-200 rounded-xl text-xs text-center font-medium">
                    ✅ {resultMessage}
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs text-center font-medium">
                    ❌ {resultMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
