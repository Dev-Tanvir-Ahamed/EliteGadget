import { categories } from "@/lib/categories";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function DesktopNav() {
  return (
    <nav className="hidden md:flex md:flex-1">
      <ul className="flex gap-6">
        {categories.map((category) => (
          <li key={category.name} className="relative group ">
            <Link
              href={category.href}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
            >
              <category.icon className="h-4 w-4" />
              <p className="text-textPrimary font-bold hover:text-primary_color transition-all">
                {" "}
                {category.name}
              </p>

              <ChevronDown className="h-3 w-3" />
            </Link>
            <div className="absolute left-0 top-full hidden w-48 rounded-md bg-popover  shadow-md group-hover:block">
              {category.subCategories.map((subCategory) => (
                <Link
                  key={subCategory.name}
                  href={subCategory.href}
                  className="block rounded-sm px-2 py-1 hover:bg-primary_color text-sm transition-all"
                >
                  <p className="text-textPrimary font-bold hover:text-white  transition-all">
                    {subCategory.name}
                  </p>
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
