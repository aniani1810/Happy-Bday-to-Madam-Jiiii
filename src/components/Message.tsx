import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Happy Birthday Madam Jii!!! 😍 On this day, I just want you to know how deeply cherished and loved you are. And I'm grateful for every moment we share together. 🤭 May this year bring you as much happiness as you give those around you cutie. 🫠 Keep smiling always just like you're smiling right now, beautiful.. 🥰 Can't wait to meet you soooonnn!! 🥹
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          On your special day, I wish you the happiest birthdayyyyy! ❤️
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
