import React from 'react';
import { motion } from 'framer-motion'

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      initial = {{y: '-100px', opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition = {{delay: 0, type: 'spring', stiffness: 20 }}
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
  )
}

export default Order;