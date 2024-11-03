"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-blue-200"
    >
      <h1 className="text-5xl font-bold text-gray-900 mb-10 text-center">
        About Furniro
      </h1>

      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px]">
        <Card className="p-8 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>{" "}
          <p className="text-lg text-gray-700 mt-2">
            At Furniro, we believe that furniture is not just about
            functionality; it's about creating a home that reflects your
            personality and lifestyle. Our vision is to become a leader in the
            furniture industry by offering innovative, sustainable, and
            beautifully designed products that inspire our customers.
          </p>
        </Card>

        <Card className="p-8 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>{" "}
          <p className="text-md text-gray-700 mt-2">
            Founded by Narzullayev Javohir in [Year], Furniro started as a small
            team of passionate designers and craftsmen who shared a common goal:
            to redefine the way people think about furniture. Our journey began
            with a single idea – to create furniture that combines aesthetics,
            comfort, and sustainability. Over the years, we have grown into a
            thriving startup, continuously pushing the boundaries of design and
            innovation.
          </p>
        </Card>

        <Card className="p-8 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Our Products</h2>{" "}
          <p className="text-lg text-gray-700 mt-2">
            We offer a wide range of furniture products, including:
          </p>
          <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
            <li>Stylish sofas and chairs</li>
            <li>Elegant dining tables and chairs</li>
            <li>Comfortable beds and bedroom furniture</li>
            <li>Functional office furniture for modern workspaces</li>
            <li>Decorative accessories to complete your look</li>
          </ul>
        </Card>

        <Card className="p-8 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">
            Sustainability
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Sustainability is at the heart of everything we do at Furniro. We
            are committed to reducing our environmental impact by using
            responsibly sourced materials, minimizing waste, and promoting
            ethical manufacturing practices. Our goal is to create beautiful
            furniture that you can feel good about bringing into your home.
          </p>
        </Card>

        <Card className="p-8 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Join Us</h2>{" "}
          {/* Changed to text-2xl */}
          <p className="text-lg text-gray-700 mt-2">
            We invite you to explore our website and discover the amazing pieces
            we have to offer. Whether you are furnishing a new home,
            redecorating, or simply looking for inspiration, Furniro is here to
            help you every step of the way. Together, let's create spaces that
            are not only beautiful but also meaningful.
          </p>
        </Card>
      </div>

      <Button
        className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
        onClick={() => (window.location.href = "/collection")} // Change to your collection URL
      >
        Explore Our Collection
      </Button>
    </motion.div>
  );
}
