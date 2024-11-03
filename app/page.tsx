"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnalyticsCards from "@/components/Analytic";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const texts = [
    "🌟 Discover a world of comfort with our exquisite furniture!",
    "✨ Unmatched quality and design for every space.",
    "🏠 Furniture crafted to perfection, just for you.",
    "🛋️ Bring style and elegance to your home with Furniro.",
  ];

  const bgImages = [
    "/background-image1.jpg",
    "/background-image2.jpg",
    "/background-image3.jpg",
    "/background-image4.jpg",
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);

    return () => {
      clearInterval(textInterval);
      clearInterval(bgInterval);
    };
  }, [texts.length, bgImages.length]);

  return (
    <main className="w-full h-full">
      <div
        className="relative h-screen bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${bgImages[currentBgIndex]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-slate-900 opacity-70 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🏢 Furniro - a huge furniture company!
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              className="text-lg text-white max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {texts[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <AnalyticsCards />
      <BentoGrid />
    </main>
  );
}
