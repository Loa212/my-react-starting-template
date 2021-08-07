import { motion } from "framer-motion";
import { useState } from "react";


const BackTopBtn = () => {
    const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

    return (
        showScroll &&
      <motion.button className="text-white bg-purple-600 opacity-70 hover:opacity-90 fixed bottom-3 right-3 px-4 py-1 rounded-full  leading-6 font-bold"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onTap={scrollTop}
      >
          Back top <span className="material-icons relative align-bottom">arrow_upward</span>
      </motion.button>
    )
}

export default BackTopBtn
