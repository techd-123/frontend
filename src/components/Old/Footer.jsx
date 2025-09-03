import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  ">
      {/* Top Section */}
      <div className=" mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8  justify-between">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">XYZ Company.com</h2>
          <p className="text-gray-400 mb-4">
            XYZ Company is a dynamic and innovative organization that leverages.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition"
            >
              f
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition"
            >
              d
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition"
            >
              i
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition"
            >
              t
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/pricing" className="hover:underline">Pricing</a></li>
              <li><a href="/releases" className="hover:underline">Releases</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/documentation" className="hover:underline">Documentation</a></li>
              <li><a href="/papers" className="hover:underline">Papers</a></li>
              <li><a href="/press" className="hover:underline">Press Conferences</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/data-processing" className="hover:underline">Data Processing</a></li>
              <li><a href="/help-center" className="hover:underline">Help Center</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2023 XYZ Company. All rights reserved
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
            <a href="/sales-refunds" className="hover:underline">Sales and Refunds</a>
            <a href="/legal" className="hover:underline">Legal</a>
            <a href="/sitemap" className="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
