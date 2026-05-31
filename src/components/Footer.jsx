import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Savora</h2>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Discover delicious recipes, share your cooking experience, and
              explore foods from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-orange-500 duration-300 cursor-pointer">
                Home
              </li>

              <li className="hover:text-orange-500 duration-300 cursor-pointer">
                Recipes
              </li>

              <li className="hover:text-orange-500 duration-300 cursor-pointer">
                About
              </li>

              <li className="hover:text-orange-500 duration-300 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li>Italian Food</li>
              <li>Asian Cuisine</li>
              <li>Desserts</li>
              <li>Healthy Meals</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Newsletter
            </h3>

            <p className="text-gray-500 mb-4">
              Subscribe to get latest recipes and updates.
            </p>

            <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 outline-none"
              />

              <button className="bg-orange-500 text-white px-5 py-3 font-medium hover:bg-orange-600 duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Savora. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-gray-500 text-sm">
            <p className="hover:text-orange-500 cursor-pointer duration-300">
              Privacy Policy
            </p>

            <p className="hover:text-orange-500 cursor-pointer duration-300">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
