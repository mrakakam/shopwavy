export const Testimonials = () => {
  return (
    <>
      <section className="bg-[#FAFAFA] py-20 px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 bellota">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 mt-2">
            Real experiences from our happy shoppers
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition max-w-sm">
            <p className="text-gray-700 italic mb-4">
              “Absolutely love the quality! The products arrived fast and were even better than expected.”
            </p>
            <h4 className="text-gray-900 font-semibold text-lg">— Sophia O.</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition max-w-sm">
            <p className="text-gray-700 italic mb-4">
              “Shopping here has been a delight. The checkout process was smooth and simple!”
            </p>
            <h4 className="text-gray-900 font-semibold text-lg">— Michael K.</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition max-w-sm">
            <p className="text-gray-700 italic mb-4">
              “Customer service is top-notch. They helped me exchange my order with no hassle at all.”
            </p>
            <h4 className="text-gray-900 font-semibold text-lg">— Aisha B.</h4>
          </div>
        </div>
      </section>
    </>
  );
};
