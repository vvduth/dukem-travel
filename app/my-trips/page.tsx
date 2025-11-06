"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useUserDetails } from "../provider";
import { TripPlan } from "@/types";
import { ArrowBigRightIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import MyTripsCardItem from "@/components/MyTripsCardItem";

export type TripFromConvex = {
  tripId: any;
  tripDetail: TripPlan;
  _id: string;
};
const MyTripsPage = () => {
  const [myTrips, setMyTrips] = useState<TripFromConvex[]>([]);
  const { userDetails, setUserDetails } = useUserDetails();
  const convex = useConvex();

  useEffect(() => {
    userDetails && GetUserTrips();
  }, [userDetails]);
  const GetUserTrips = async () => {
    const result = await convex.query(api.tripDetails.GetUserTrips, {
      uid: userDetails?._id,
    });
    setMyTrips(result);
  };

  return (
    <div className="px-10 p-10 md:px-24 lg:px-48">
      <h2 className="text-3xl font-bold">My Trips</h2>
      {myTrips?.length === 0 && (
        <div className="p-7 border rounded-2xl flex flex-col items-center justify-center gap-5 mt-6">
          <h2>You have no trips planned.</h2>
          <Link href={"/create-new-trip"}>
            <Button>Create a new trip</Button>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {myTrips.map((trip: TripFromConvex, index: number) => (
          <MyTripsCardItem key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default MyTripsPage;
