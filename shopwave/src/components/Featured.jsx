import { useState } from "react";

export const FeaturedSection = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: "AirFlex Sneakers",
      price: "$79.99",
      image: "/images/sneakers.jpg",
    },
    {
      id: 2,
      name: "Leather Tote Bag",
      price: "$59.99",
      image: "/images/bag.jpg",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "$129.99",
      image: "/images/watch.jpg",
    },
    {
      id: 4,
      name: "Noise-Cancel Headphones",
      price: "$89.99",
      image: "/images/headphones.jpg",
    },
  ];

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white py-16 px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 bellota">
          Featured Products
        </h2>
        <p className="text-gray-500 mt-2">Hand-picked favorites just for you</p>

        {/* 🔍 Search Bar */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md hover:shadow-lg transition w-[250px] text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl mb-4 w-full h-[200px] object-cover"
              />
              <h3 className="font-semibold text-gray-800 text-lg">
                {product.name}
              </h3>
              <p className="text-gray-500 mt-1">{product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No products found 😢
          </p>
        )}
      </div>
    </section>
  );
};
