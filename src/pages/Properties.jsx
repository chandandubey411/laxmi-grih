import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import { propertiesData } from "../data/mockData";
import { FaFilter, FaTimes } from "react-icons/fa";

const Properties = () => {
  const [filterType, setFilterType] = useState("All");

  const propertyTypes = ["All", "Flat", "House", "Plot"];

  const filteredProperties = propertiesData.filter((item) => {
    return filterType === "All" || item.type === filterType;
  });

  const isFiltered = filterType !== "All";
  const resetFilters = () => { setFilterType("All"); };

  const FilterBtn = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
        active
          ? "bg-primary text-white border-primary shadow-md"
          : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-light">

      {/* Header Banner */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label text-secondary justify-center flex">Exclusive Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Properties</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explore our curated selection of verified properties in Patna &amp; Rajgir, Bihar — plots, flats, and houses tailored to your lifestyle and investment goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white sticky top-[57px] z-40 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">

            {/* Type */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <FaFilter className="text-secondary" /> Property Type
              </span>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((t) => (
                  <FilterBtn key={t} label={t} active={filterType === t} onClick={() => setFilterType(t)} />
                ))}
              </div>
            </div>



            {/* Reset */}
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-red-500 text-sm font-semibold hover:text-red-700 transition-colors ml-auto"
              >
                <FaTimes /> Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results Info */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 text-sm">
              Showing <span className="font-bold text-primary">{filteredProperties.length}</span> of {propertiesData.length} properties
              {isFiltered && <span className="ml-1 text-secondary">(filtered)</span>}
            </p>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            {filteredProperties.length > 0 ? (
              <motion.div
                key={`${filterType}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24"
              >
                <div className="text-7xl mb-6">🏠</div>
                <h3 className="text-2xl font-bold text-primary mb-2 font-heading">No Properties Found</h3>
                <p className="text-gray-500 mb-8">No listings match your current filters. Try a different combination.</p>
                <button
                  onClick={resetFilters}
                  className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary hover:text-primary transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Properties;
