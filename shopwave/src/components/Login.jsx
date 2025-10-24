export const Login = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] px-6 py-16">
        {/* Login Card */}
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
          {/* Header */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 bellota">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Log in to continue shopping or manage your store.
          </p>

          {/* Login Form */}
          <form className="space-y-5">
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
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 outline-none"
              />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="accent-gray-800" />
                Remember me
              </label>
              <a href="#" className="text-gray-800 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Log In
            </button>
          </form>

          {/* Sign Up Redirect */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-gray-800 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </section>
    </>
  );
};
