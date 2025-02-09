import {
  Camera,
  GamepadIcon,
  Headphones,
  Laptop,
  Smartphone,
  Watch,
} from "lucide-react";

export const categories = [
  {
    name: "Laptops & Computers",
    href: "/category/laptops",
    icon: Laptop,
    subCategories: [
      { name: "Laptops", href: "/category/laptops/all" },
      { name: "Desktop PCs", href: "/category/desktops" },
      { name: "Computer Accessories", href: "/category/computer-accessories" },
    ],
  },
  {
    name: "Smartphones",
    href: "/category/smartphones",
    icon: Smartphone,
    subCategories: [
      { name: "Apple", href: "/category/smartphones/apple" },
      { name: "Samsung", href: "/category/smartphones/samsung" },
      { name: "Google", href: "/category/smartphones/google" },
    ],
  },
  {
    name: "Wearables",
    href: "/category/wearables",
    icon: Watch,
    subCategories: [
      { name: "Smartwatches", href: "/category/wearables/smartwatches" },
      {
        name: "Fitness Trackers",
        href: "/category/wearables/fitness-trackers",
      },
    ],
  },
  {
    name: "Audio",
    href: "/category/audio",
    icon: Headphones,
    subCategories: [
      { name: "Headphones", href: "/category/audio/headphones" },
      { name: "Speakers", href: "/category/audio/speakers" },
      { name: "Microphones", href: "/category/audio/microphones" },
    ],
  },
  {
    name: "Cameras",
    href: "/category/cameras",
    icon: Camera,
    subCategories: [
      { name: "DSLR", href: "/category/cameras/dslr" },
      { name: "Mirrorless", href: "/category/cameras/mirrorless" },
      { name: "Action Cameras", href: "/category/cameras/action" },
    ],
  },
  {
    name: "Gaming",
    href: "/category/gaming",
    icon: GamepadIcon,
    subCategories: [
      { name: "Consoles", href: "/category/gaming/consoles" },
      { name: "PC Gaming", href: "/category/gaming/pc" },
      { name: "Accessories", href: "/category/gaming/accessories" },
    ],
  },
];
