import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface ProductItems {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  imageUrl: string;
  rating: number;
  isAvailable: boolean;
}

export type navItemsProps = {
  id: string;
  title: string;
};

export type iconItemsProps = {
  id: string;
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
