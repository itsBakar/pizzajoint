import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      initial = {{y: '-100px', opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{delay: 0, type: 'spring', stiffness: 20 }}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover = {{
              scale: 1.3,
              originX: 0,
              color: '#a2a832'
            }}
            transition = {{
              type: 'spring',
              stiffness: 200,
            }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        initial = {{y: '50px', opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{delay: 0, type: 'spring', stiffness: 20 }}
        >
          <Link to="/toppings">
            <motion.button 
            whileHover = {{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;