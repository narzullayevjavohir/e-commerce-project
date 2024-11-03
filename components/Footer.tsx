"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <motion.footer
      className="relative bottom-0 left-0 w-full h-64 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex flex-col items-center p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h2 className="text-center text-3xl font-bold mb-2 transform transition duration-300 hover:scale-110">
        Furniro - Your Stylish Furniture Destination
      </h2>
      <p className="text-lg mb-4 text-center">
        Transforming spaces with elegance and comfort.
      </p>
      <div className="flex flex-row space-x-4 mb-4">
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-blue-500 transition duration-300"
        >
          Contact Us
        </Button>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-blue-500 transition duration-300"
        >
          About Us
        </Button>
      </div>
      <div className="flex flex-row space-x-4 mb-4">
        <motion.a
          href="#"
          className="hover:text-blue-600 transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebook size={28} />
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-blue-400 transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter size={28} />
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-pink-500 transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram size={28} />
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-blue-500 transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin size={28} />
        </motion.a>
      </div>
      <p className="text-sm mt-4 text-center">
        &copy; {new Date().getFullYear()} Furniro. All rights reserved.
      </p>
    </motion.footer>
  );
}
