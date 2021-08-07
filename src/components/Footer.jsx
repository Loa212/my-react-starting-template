import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 pt-10  sm:pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Col-1 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Col Title */}
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Getting Started
          </div>
          {/* Links */}
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Installation
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Release Notes
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Upgrade Guide
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Using with Preprocessors
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Optimizing for Production
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Browser Support
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            IntelliSense
          </Link>
        </div>
        {/* Col-2 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Col Title */}
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Core Concepts
          </div>
          {/* Links */}
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Utility-First
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Responsive Design
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Hover, Focus, &amp; Other States
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Dark Mode
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Adding Base Styles
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Extracting Components
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Adding New Utilities
          </Link>
        </div>
        {/* Col-3 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Col Title */}
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Customization
          </div>
          {/* Links */}
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Configuration
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Theme Configuration
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Breakpoints
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Customizing Colors
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Customizing Spacing
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Configuring Variants
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Plugins
          </Link>
        </div>
        {/* Col-3 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Col Title */}
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Community
          </div>
          {/* Links */}
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            GitHub
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Discord
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Twitter
          </Link>
          <Link
            to='/'
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            YouTube
          </Link>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
      border-t border-gray-500 text-gray-400 text-sm 
      flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2">© Copyright 2021. All Rights Reserved.</div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <Link to='/' className="w-6 mx-1">
              <i className="material-icons">facebook</i>
            </Link>
            <Link to='/' className="w-6 mx-1">
              <i className="material-icons">facebook</i>
            </Link>
            <Link to='/' className="w-6 mx-1">
              <i className="material-icons">facebook</i>
            </Link>
            <Link to='/' className="w-6 mx-1">
              <i className="material-icons">facebook</i>
            </Link>
            <Link to='/' className="w-6 mx-1">
              <i className="material-icons">facebook</i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
