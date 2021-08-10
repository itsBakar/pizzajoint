import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
      initial = {{y: '-100px', opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{delay: 0, type: 'spring', stiffness: 20 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
        initial = {{y: '-100px', opacity: 0}}
        animate = {{y: 0, opacity: 1}}
        transition = {{delay: 0, type: 'spring', stiffness: 20 }}
        whileHover = {{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
          duration: 500
        }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;