import { FaMapMarkerAlt, FaBed, FaBath, FaVectorSquare, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const typeColors = {
  Villa: "bg-emerald-500",
  Flat: "bg-blue-500",
  Plot: "bg-amber-500",
};

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col">
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Type Badge */}
        <div className={`absolute top-4 left-4 ${typeColors[property.type] || "bg-gray-600"} text-white font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg`}>
          {property.type}
        </div>
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-secondary font-bold px-3 py-1 rounded-full text-sm shadow-lg">
          {property.price}
        </div>
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary/80 via-primary/30 to-transparent p-4 pt-8">
          <h3 className="text-lg font-heading font-bold text-white leading-tight truncate">{property.title}</h3>
          <p className="flex items-center gap-1.5 text-gray-200 text-xs mt-1 truncate">
            <FaMapMarkerAlt className="text-secondary shrink-0" />
            {property.location}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed">
          {property.description}
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-100 mb-5">
          <div className="flex flex-col items-center gap-1">
            <FaBed className="text-secondary text-lg" />
            <span className="text-xs font-semibold text-gray-600">
              {property.bedrooms > 0 ? `${property.bedrooms} Beds` : "Open Plot"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-gray-100">
            <FaBath className="text-secondary text-lg" />
            <span className="text-xs font-semibold text-gray-600">
              {property.bathrooms > 0 ? `${property.bathrooms} Baths` : "—"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaVectorSquare className="text-secondary text-lg" />
            <span className="text-xs font-semibold text-gray-600">{property.area}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="mt-auto flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-secondary hover:text-primary transition-all duration-300 group/btn"
        >
          Enquire Now
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
