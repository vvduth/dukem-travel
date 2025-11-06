import { TripPlan } from "@/types";
import React, { createContext } from "react";

export type TripDetailsContextType = {
    tripDetailsInfo: TripPlan | null;
    setTripDetailsInfo: React.Dispatch<React.SetStateAction<TripPlan | null>>;
}

export const TripDetailsContext = createContext<TripDetailsContextType | null>(null);