import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TRIP_DATA } from "@/constants/dummy";
import { Hotel } from "@/types";
import Image from "next/image";
import { Clock, Star, Ticket, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import HotelCardItem from "./HotelCardItem";
import PlaceCardItem from "./PlaceCardItem";
export default function Itinerary() {
  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {TRIP_DATA?.hotels.map((hotel: Hotel, index) => (
            <HotelCardItem key={index} hotel={hotel} />
          ))}
        </div>
      ),
    },
    ...TRIP_DATA?.itinerary.map((dayData, index) => ({
      title: `Day ${dayData.day}`,
      content: (
        <div key={index}>
          <p> Best time: {dayData?.best_time_to_visit_day}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {dayData?.activities.map((activity, idx) => (
              <PlaceCardItem key={idx} activity={activity} />
            ))}
          </div>
        </div>
      ),
    })),
  ];
  return (
    <div className="relative w-full  h-[85vh] overflow-auto">
      <Timeline data={data} tripData={TRIP_DATA} />
    </div>
  );
}
