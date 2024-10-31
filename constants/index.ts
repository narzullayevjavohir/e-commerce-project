import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { v4 as uuid } from "uuid";
export const navItems = [
  {
    id: uuid(),
    title: "home",
  },
  {
    id: uuid(),
    title: "about",
  },
  {
    id: uuid(),
    title: "shop",
  },
  {
    id: uuid(),
    title: "contact",
  },
];

export const iconItems = [
  {
    id: uuid(),
    name: "register",
    icon: User,
  },
  {
    id: uuid(),
    name: "search",
    icon: Search,
  },
  {
    id: uuid(),
    name: "favorite",
    icon: Heart,
  },
  {
    id: uuid(),
    name: "shopping-cart",
    icon: ShoppingCart,
  },
];
