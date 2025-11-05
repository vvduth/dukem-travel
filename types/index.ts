export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface Hotel {
  hotel_name: string;
  hotel_address: string;
  price_per_night: string;
  hotel_image_url: string;
  geo_coordinates: GeoCoordinates;
  rating: number;
  description: string;
}

export interface Activity {
  place_name: string;
  place_details: string;
  place_image_url: string;
  geo_coordinates: GeoCoordinates;
  place_address: string;
  ticket_pricing: string;
  travel_time_each_location: string;
  best_time_to_visit: string;
}

export interface DailyItinerary {
  day: number;
  day_plan: string;
  best_time_to_visit_day: string;
  activities: Activity[];
}

export interface TripPlan {
  destination: string;
  duration: string;
  origin: string;
  group_size: string;
  budget: string;
  hotels: Hotel[];
  itinerary: DailyItinerary[];
}

export interface TripInfo {
  trip_plan: TripPlan;
}

// For the AI response wrapper
export interface AITripResponse {
  role: string;
  content: string; // This is the stringified JSON containing TripInfo
  refusal: null | string;
  reasoning: null | string;
}