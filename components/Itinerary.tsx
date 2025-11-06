import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TRIP_DATA } from "@/constants/dummy";
import { Hotel } from "@/types";
import Image from "next/image";
import { Star, Wallet } from "lucide-react";
import { Button } from "./ui/button";
export default function Itinerary() {
  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {TRIP_DATA?.hotels.map((hotel: Hotel, index) => (
            <div key={index} className="flex flex-col gap-1">
              <Image
                className="rounded-xl shadow object-cover mb-2"
                src={"/images/newyork.jpg"}
                alt="place-image"
                width={400}
                height={200}
              />
              <h2 className="font-semibold text-lg">{hotel.hotel_name}</h2>
              <h2 className="text-gray-500 text-xs">{hotel.hotel_address}</h2>
              <div className="flex justify-between items-center">
                <p className="flex gap-2 text-green-400 text-xs">
                  <Wallet /> {hotel.price_per_night}
                </p>
                <p className="flex gap-2 text-yellow-400 text-xs">
                  <Star /> {hotel.rating}
                </p>
              </div>
              <p className="line-clamp-2 text-gray-400">{hotel.description}</p>
              <Button variant={"outline"} className="mt-1">
                View
              </Button>
            </div>
          ))}
        </div>
      ),
    },
    ...TRIP_DATA?.itinerary.map((dayData, index) => ({
      title: `Day ${dayData.day}`,
      content: (
        <div>
          <p> Best time: {dayData?.best_time_to_visit_day}</p>
        </div>
      )
    }))
  ];
  return (
    <div className="relative w-full  h-[85vh] overflow-auto">
      <Timeline data={data} tripData={TRIP_DATA} />
    </div>
  );
}
