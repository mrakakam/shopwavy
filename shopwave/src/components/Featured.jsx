export const FeaturedSection = () => {
  return (
    <>
      <section className="bg-white py-16 px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 bellota">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            Hand-picked favorites just for you
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          
          {/* Product 1 */}
          <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md hover:shadow-lg transition w-[250px] text-center">
            <img
              src="/images/sneakers.jpg"
              alt="Sneakers"
              className="rounded-xl mb-4 w-full h-[200px] object-cover"
            />
            <h3 className="font-semibold text-gray-800 text-lg">
              AirFlex Sneakers
            </h3>
            <p className="text-gray-500 mt-1">$79.99</p>
          </div>

          {/* Product 2 */}
          <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md hover:shadow-lg transition w-[250px] text-center">
            <img
              src="/images/bag.jpg"
              alt="Leather Tote Bag"
              className="rounded-xl mb-4 w-full h-[200px] object-cover"
            />
            <h3 className="font-semibold text-gray-800 text-lg">
              Leather Tote Bag
            </h3>
            <p className="text-gray-500 mt-1">$59.99</p>
          </div>

          {/* Product 3 */}
          <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md hover:shadow-lg transition w-[250px] text-center">
            <img
              src="/images/watch.jpg"
              alt="Smart Watch"
              className="rounded-xl mb-4 w-full h-[200px] object-cover"
            />
            <h3 className="font-semibold text-gray-800 text-lg">
              Smart Watch
            </h3>
            <p className="text-gray-500 mt-1">$129.99</p>
          </div>

          {/* Product 4 */}
          <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md hover:shadow-lg transition w-[250px] text-center">
            <img
              src="/images/headphones.jpg"
              alt="Headphones"
              className="rounded-xl mb-4 w-full h-[200px] object-cover"
            />
            <h3 className="font-semibold text-gray-800 text-lg">
              Noise-Cancel Headphones
            </h3>
            <p className="text-gray-500 mt-1">$89.99</p>
          </div>
        </div>
      </section>
    </>
  );
};
