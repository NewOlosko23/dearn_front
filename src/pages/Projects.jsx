import React from "react";

const projects = [
  {
    id: 1,
    title: "Luxury Interior Design",
    description:
      "Complete plastering, molding designs, and finishing for a modern villa.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Commercial Tiling Project",
    description: "High-quality tiling and finishing for office spaces.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Elegant Molding Installation",
    description: "Custom molding design and plastering for a boutique hotel.",
    image:
      "https://images.unsplash.com/photo-1576675787566-28fa6f5ebd03?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Modern Living Room Finish",
    description:
      "Sophisticated plaster finish and molding for residential spaces.",
    image:
      "https://images.unsplash.com/photo-1600585154264-8d3d2f14f8c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Outdoor Patio Tiling",
    description: "Durable and stylish tiling for exterior patios and walkways.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Office Space Renovation",
    description:
      "Complete interior design including plastering, molding, and tiling for a modern office.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Classic Ceiling Molding",
    description: "Intricate molding designs enhancing classic architecture.",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Bathroom Tiling and Finish",
    description: "Waterproof and elegant tiling solutions for bathrooms.",
    image:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Custom Wall Plastering",
    description:
      "Textured and smooth plaster finishes customized to client needs.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    title: "Kitchen Backsplash Tiling",
    description: "Stylish and easy-to-clean tile backsplashes for kitchens.",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    title: "Hotel Lobby Finishings",
    description: "Luxurious plastering and molding for hotel interiors.",
    image:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b94?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    title: "Custom Staircase Design",
    description: "Elegant plaster and molding finishes for staircases.",
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=600&q=80",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Our Projects
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore some of the exceptional plastering, molding, tiling, and
        finishing projects we’ve completed with passion and precision.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {projects.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {title}
              </h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
