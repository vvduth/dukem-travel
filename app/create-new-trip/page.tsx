"use client";
import ChatBox from "@/components/ChatBox";
import Itinerary from "@/components/Itinerary";
import React, { useEffect, useState } from "react";
import { useTripDetails } from "../provider";
import GlobalMap from "@/components/GlobalMap";
import { Button } from "@/components/ui/button";
import { Globe2, Plane } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CreateNewTrip = () => {
  const { tripDetailsInfo, setTripDetailsInfo } = useTripDetails();
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    setTripDetailsInfo(null);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-10 p-10">
      <div>
        <ChatBox />
      </div>
      <div className="col-span-2 relative">
        {activeIndex === 0 ? <Itinerary /> : <GlobalMap />}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
              className="mt-5 absolute bottom-20 right-10"
            >
              {activeIndex === 0 ? (
                <>
                  <Globe2 className="mr-2" /> Show Map
                </>
              ) : (
                <>
                  <Plane className="mr-2" /> Show Itinerary
                </>
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Switch to {activeIndex === 0 ? "Map" : "Itinerary"} View
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default CreateNewTrip;
