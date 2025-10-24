export const SignUp = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] px-6 py-16">
        {/* Card */}
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
          {/* Header */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 bellota">
            Create Your Account
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Join as a buyer or seller and start your shopping journey today.
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 outline-none"
              />
            </div>

            {/* Account Type (Buyer or Seller) */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-3">
                Sign up as:
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="radio" name="role" value="buyer" className="accent-gray-800" />
                  Buyer
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="radio" name="role" value="seller" className="accent-gray-800" />
                  Seller
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-gray-800 font-semibold hover:underline">
              Log in
            </a>
          </p>
        </div>
      </section>
    </>
  );
};
