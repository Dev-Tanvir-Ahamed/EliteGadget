import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import categories1 from "../../../../public/images/featuredImage/category-1.webp";
import categories2 from "../../../../public/images/featuredImage/category-2.webp";

import categories10 from "../../../../public/images/featuredImage/category-10.webp";
import categories11 from "../../../../public/images/featuredImage/category-11.webp";
import categories12 from "../../../../public/images/featuredImage/category-12.webp";
import categories3 from "../../../../public/images/featuredImage/category-3.webp";
import categories4 from "../../../../public/images/featuredImage/category-4.webp";
import categories5 from "../../../../public/images/featuredImage/category-5.webp";
import categories6 from "../../../../public/images/featuredImage/category-6.webp";
import categories7 from "../../../../public/images/featuredImage/category-7.webp";
import categories8 from "../../../../public/images/featuredImage/category-8.webp";
import categories9 from "../../../../public/images/featuredImage/category-9.webp";

const topRowCategories = [
  {
    title: "Camera",
    image: categories1,
    href: "/category/camera",
  },
  {
    title: "Games & Consoles",
    image: categories2,
    href: "/category/games-consoles",
  },
  {
    title: "Tops & Sets",
    image: categories3,
    href: "/category/tops-sets",
  },
  {
    title: "Laptop",
    image: categories4,
    href: "/category/laptop",
  },
  {
    title: "Smartphone",
    image: categories5,
    href: "/category/smartphone",
  },
  {
    title: "Bottoms",
    image: categories6,
    href: "/category/bottoms",
  },
];

const bottomRowCategories = [
  {
    title: "Accessories",
    image: categories7,
    href: "/category/accessories",
  },
  {
    title: "Video Games",
    image: categories8,
    href: "/category/video-games",
  },
  {
    title: "Bottoms",
    image: categories9,
    href: "/category/bottoms",
  },
  {
    title: "Computer",
    image: categories10,
    href: "/category/computer",
  },
  {
    title: "Game Consoles",
    image: categories11,
    href: "/category/game-consoles",
  },
  {
    title: "Tops & Sets",
    image: categories12,
    href: "/category/tops-sets",
  },
];

function CategoryGrid({ categories }: { categories: typeof topRowCategories }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-[#F1F1F1]">
      {categories.map((category, index) => (
        <Link key={index} href={category.href}>
          <Card className="hover:shadow-lg group  transition-shadow">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-4">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-center font-medium text-sm sm:text-base group-hover:text-primary_color transition-all">
                {category.title}
              </h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default function FeaturedCategories() {
  return (
    <section className="py-12 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight relative inline-block">
            FEATURED CATEGORIES
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 -mb-2" />
          </h2>
        </div>

        <div className="space-y-8">
          <CategoryGrid categories={topRowCategories} />
          <CategoryGrid categories={bottomRowCategories} />
        </div>
      </div>
    </section>
  );
}
