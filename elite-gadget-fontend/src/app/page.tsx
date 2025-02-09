import Banner from "@/components/HomePage/Banner/Banner";
import FeaturedCategories from "@/components/HomePage/FeaturedCategories/FeaturedCategories";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Banner />
      <FeaturedCategories />
    </div>
  );
}
