import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const itemsData = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Furniture Item ${index + 1}`, // Example title
  description: `Description for furniture item ${index + 1}.`,
  imageUrl: `/mebel-${index + 1}.jpg`, // Dynamically generating image URL
}));

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
      {itemsData.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          exit={{ opacity: 0, y: -20 }} // Exit animation
          transition={{ duration: 0.5 }} // Transition duration
        >
          <motion.div
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down when tapped
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Card>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  <h2>{item.title}</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-500 mt-2">
                  <p>{item.description}</p>
                </CardDescription>
                <Button className="mt-4 w-full" variant={"outline"}>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
