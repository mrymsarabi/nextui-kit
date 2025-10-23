'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
        on ? 'bg-blue-500' : 'bg-gray-600'
      }`}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md ${
          on ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
