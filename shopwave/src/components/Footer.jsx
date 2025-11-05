export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white bellota mb-4">Decor Store</h3>
            <p className="text-gray-400 text-sm">
              Your go-to destination for fresh styles, great deals, and everyday essentials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <i className="bi bi-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="bi bi-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="bi bi-tiktok text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Decor Store. All rights reserved.
        </div>
      </footer>
    </>
  );
};
