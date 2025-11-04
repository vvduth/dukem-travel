"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CityItem {
  category: string
  title: string
  src: string
  content: string
}

const cityData: CityItem[] = [
  {
    category: "Paris",
    title: "The City of Light",
    src: "/images/paris.jpg",
    content: "Experience the romance and elegance of Paris with its iconic Eiffel Tower, world-class museums, and charming cafés.",
  },
  {
    category: "Tokyo",
    title: "Where Tradition Meets Innovation",
    src: "/images/tokyo.jpg",
    content: "Discover the vibrant energy of Tokyo, from ancient temples to cutting-edge technology and incredible cuisine.",
  },
  {
    category: "New York",
    title: "The City That Never Sleeps",
    src: "/images/newyork.jpg",
    content: "Explore the dynamic streets of New York City, featuring Broadway shows, iconic landmarks, and diverse neighborhoods.",
  },
  {
    category: "Barcelona",
    title: "Mediterranean Marvel",
    src: "/images/barcelona.jpg",
    content: "Immerse yourself in Barcelona's unique blend of Gothic architecture, modernist masterpieces, and stunning beaches.",
  },
]

export default function PopularCityList() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our handpicked selection of the world's most exciting cities
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {cityData.map((city, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80 w-full">
                    <Image
                      src={city.src}
                      alt={city.category}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {city.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{city.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {city.content}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
