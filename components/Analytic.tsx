"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FaEye, FaMousePointer, FaChartLine } from "react-icons/fa"; // Icons from React Icons

const analyticsData = [
  {
    id: 1,
    title: "Views",
    targetValue: 1234,
    icon: <FaEye className="text-blue-500 text-2xl" />,
    description: "Total page views",
  },
  {
    id: 2,
    title: "Clicks",
    targetValue: 567,
    icon: <FaMousePointer className="text-green-500 text-2xl" />,
    description: "User clicks on links",
  },
  {
    id: 3,
    title: "Conversion Rate",
    targetValue: 47,
    icon: <FaChartLine className="text-purple-500 text-2xl" />,
    description: "Percentage of conversions",
  },
];

const Counter = ({ targetValue }: { targetValue: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    const duration = 2;
    const increment = Math.ceil(end / (duration * 60));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <motion.span className="text-3xl font-bold text-gray-900">
      {count}
    </motion.span>
  );
};

export default function AnalyticsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
      {analyticsData.map((data) => (
        <motion.div
          key={data.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex items-center space-x-4">
              <div className="p-2 bg-gray-200 rounded-full">{data.icon}</div>
              <CardTitle className="text-lg font-semibold text-gray-800">
                {data.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Counter targetValue={data.targetValue} />
              <CardDescription className="text-gray-500 mt-2">
                {data.description}
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
