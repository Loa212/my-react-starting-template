import { useState } from "react";
import ClickAwayListener from 'react-click-away-listener';

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

import "./header.css";
import { motion } from "framer-motion";

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(false);

  const variants = {
    open: { x: 0 },
    closed: { x: "+100%" },
  };

  let menuBg = (
    <div
      className="fixed adjust-bg bg-black opacity-50 w-full h-full z-10 backdrop-filter backdrop-blur-3xl"
    ></div>
  );

  let menu = (
     <ClickAwayListener
        onClickAway={() => setShowMenu(false)}
      > 
        <div className="fixed bg-white top-0 right-0 h-full z-20 shadow w-3/4 p-3">
          <div className="flex justify-end">
            {/* <h2>Menu</h2> */}

            <button className="height-40px" onClick={() => setShowMenu(false)}>
              <span className="material-icons align-middle bigger-icon">close</span>
            </button>
          </div>
          <div className="flex flex-col text-center pt-6 space-y-5">

            <Link to='/' className="uppercase mr-5 text-lg hover:text-gray-900">This is</Link>
            <Link to='/' className="uppercase mr-5 text-lg hover:text-gray-900">an example</Link>
            <Link to='/' className="uppercase mr-5 text-lg hover:text-gray-900">of a nice</Link>
            <Link to='/' className="uppercase mr-5 text-lg hover:text-gray-900">side menu</Link>
            
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              className="uppercase inline-flex items-center text-2xl text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-800 rounded  mt-4 md:mt-0">
                  Ciao ciao!
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-7 h-7 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
              </motion.button>
            </Link>
          </div>
        </div>
    </ClickAwayListener>
  );

  return (
    <div>
      {/* desktop */}
      <header className="text-gray-600 body-font hidden md:block">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link 
            to='/'
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">LorisDev</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to='/' className="uppercase mr-5 text-lg hover:text-gray-900">This is</Link>
            <Link to='/' className="uppercase mr-5 text-lg hover:text-gray-900">an example</Link>
            <Link to='/' className="uppercase mr-5 text-lg hover:text-gray-900">of a nice</Link>
            <Link to='/' className="uppercase mr-5 text-lg hover:text-gray-900">side menu</Link>
          </nav>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
             className="uppercase inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-800 rounded text-base mt-4 md:mt-0">
                Ciao ciao!
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </motion.button>
          </Link>
        </div>
      </header>

      {ShowMenu && menuBg}

      
        <motion.nav
          animate={ShowMenu ? "open" : "closed"}
          variants={variants}
          className="fixed h-full w-full z-50 no-scroll"
          >
          {ShowMenu && menu}
        </motion.nav>

      {/* mobile */}
      
        <header className="text-gray-600 body-font  md:hidden z-0">
          <div className="container mx-auto flex justify-between p-3">
            <div className="height-40px">
              <Link
                to='/'
                className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="ml-3 text-xl">LorisDev</span>
              </Link>
            </div>
            <button
              className="height-40px"
              onClick={() => setShowMenu(!ShowMenu)}
            >
              <span className="material-icons align-middle bigger-icon">
                menu
              </span>
            </button>
          </div>
        </header>
    </div>
  );
};

export default Header;
