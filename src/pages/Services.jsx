import React from "react";
import {
  FaHammer,
  FaRulerCombined,
  FaPaintRoller,
  FaThLarge,
} from "react-icons/fa";

const services = [
  {
    title: "Plastering & Finishing",
    icon: <FaHammer className="text-primary w-8 h-8" />,
    description:
      "Expert plastering and surface finishing to deliver smooth, durable, and paint-ready walls for residential and commercial spaces.",
  },
  {
    title: "Moulding Designs",
    icon: <FaRulerCombined className="text-primary w-8 h-8" />,
    description:
      "Stylish and detailed ceiling and wall moulding designs that add elegance and luxury to your interior spaces.",
  },
  {
    title: "Interior Tiling",
    icon: <FaThLarge className="text-primary w-8 h-8" />,
    description:
      "High-quality floor and wall tiling with precision alignment, perfect for kitchens, bathrooms, and living areas.",
  },
  {
    title: "Interior Design Finishes",
    icon: <FaPaintRoller className="text-primary w-8 h-8" />,
    description:
      "Final interior touch-ups and finishes that transform spaces into refined, modern environments tailored to your vision.",
  },
];

const Services = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
