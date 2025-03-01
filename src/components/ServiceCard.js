// src/components/ServiceCard.js
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Starts slightly transparent and 20px lower
      animate={{ opacity: 1, y: 0 }}  // Animates to fully visible and at normal position
      transition={{ duration: 0.5 }}  // Animation lasts 0.5 seconds
      className="p-4 border rounded shadow hover:shadow-lg" // Tailwind styling
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
