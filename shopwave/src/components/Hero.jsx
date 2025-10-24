import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#FAFAFA] px-8 py-16 rounded-2xl shadow-md">
        
        {/* Left Text Section */}
        <div className="flex flex-col gap-6 max-w-md">
          <h3 className="text-4xl font-bold text-gray-800 bellota">Fresh Arrivals</h3>
          <p className="text-gray-600 text-lg">
            Discover the latest trends and exclusive deals on our new collections. Shop your favorites today!
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <Link
              to="/login"
              className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="border border-black text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-10 md:mt-0">
          <img
            src="/images/hero-banner.jpg"
            alt="New Collection"
            className="rounded-2xl shadow-lg w-[300px] md:w-[400px]"
          />
        </div>
      </section>
    </>
  );
};
