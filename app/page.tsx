import Hero from "@/components/Hero";
import PopularCityList from "@/components/PopularCityList";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularCityList  />
    </div>
  );
}
