export const TRIP_DATA = {
  destination: "Munich",
  duration: "3 days",
  origin: "Tampere",
  group_size: "Couple (2)",
  budget: "Moderate",
  hotels: [
    {
      hotel_name: "Hotel Torbräu",
      hotel_address: "32 Dachauer Straße, 80335 München",
      price_per_night: "Approximately €120 per night",
      hotel_image_url:
        "https://images.unsplash.com/photo-1590739735557-6f84dcf1dfd0?w=800",
      geo_coordinates: {
        latitude: 48.14129,
        longitude: 11.56404,
      },
      rating: 4,
      description:
        "A charming 3‑star boutique hotel located in the heart of Munich, offering contemporary rooms, a serene courtyard, and easy access to historic streets.",
    },
    {
      hotel_name: "Courtyard by Marriott Munich City",
      hotel_address: "9 Rosenstraße, 81663 München",
      price_per_night: "Approximately €180 per night",
      hotel_image_url:
        "https://images.unsplash.com/photo-1520528709662-26673e117eaa?w=800",
      geo_coordinates: {
        latitude: 48.14159,
        longitude: 11.55434,
      },
      rating: 4.2,
      description:
        "A modern 4‑star hotel near the Hauptbahnhof, featuring stylish rooms, a rooftop terrace, and a fitness center.",
    },
    {
      hotel_name: "Hotel Lilla",
      hotel_address: "7 Freimaurerstraße, 80335 München",
      price_per_night: "Approximately €140 per night",
      hotel_image_url:
        "https://images.unsplash.com/photo-1588768757717-1dfa0a1321b2?w=800",
      geo_coordinates: {
        latitude: 48.14207,
        longitude: 11.55729,
      },
      rating: 4.3,
      description:
        "A boutique 3‑star hotel offering minimalist design, an indoor pool, and a rooftop bar overlooking the city.",
    },
  ],
  itinerary: [
    {
      day: 1,
      day_plan: "Arrival & Local Flavors",
      best_time_to_visit_day:
        "Morning to accomodate settling in, afternoon for sightseeing, evening for dinner",
      activities: [
        {
          place_name: "Marienplatz",
          place_details:
            "Central square with the Glockenspiel, historic architecture, and lively cafés.",
          place_image_url:
            "https://images.unsplash.com/photo-1507758924714-82859f7c0fa1?w=800",
          geo_coordinates: {
            latitude: 48.13743,
            longitude: 11.57522,
          },
          place_address: "Marienplatz 1, 80331 München",
          ticket_pricing: "Free entry",
          travel_time_each_location: "10 minutes walk from hotel",
          best_time_to_visit: "Morning or early afternoon",
        },
        {
          place_name: "Hofbräuhaus am Platzl",
          place_details:
            "Iconic brewery‑restaurant famous for Bavarian beers, pretzels, and live music.",
          place_image_url:
            "https://images.unsplash.com/photo-1532489527802-e1a0d4d1c539?w=800",
          geo_coordinates: {
            latitude: 48.13786,
            longitude: 11.57536,
          },
          place_address: "Platzl 9/10, 80331 München",
          ticket_pricing: "Approx. €30 per adult for a full dinner experience",
          travel_time_each_location: "5 minutes walk from Marienplatz",
          best_time_to_visit: "Evening for the authentic atmosphere",
        },
      ],
    },
    {
      day: 2,
      day_plan: "Culture, Food & Nightlife",
      best_time_to_visit_day:
        "Morning explorations, midday for culinary delights, afternoon tours, evening nightlife",
      activities: [
        {
          place_name: "Deutsches Museum",
          place_details:
            "World’s largest museum of science and technology, featuring interactive exhibits.",
          place_image_url:
            "https://images.unsplash.com/photo-1529541844171-1d4f0a48e79a?w=800",
          geo_coordinates: {
            latitude: 48.14897,
            longitude: 11.57136,
          },
          place_address: "Museumsinsel 1, 80333 München",
          ticket_pricing: "Approx. €15 per adult",
          travel_time_each_location: "15 minutes by tram from the hotel",
          best_time_to_visit: "Morning",
        },
        {
          place_name: "Viktualienmarkt",
          place_details:
            "Vibrant open‑air market offering fresh produce, sausages, cheeses, and local specialties.",
          place_image_url:
            "https://images.unsplash.com/photo-1526508377032-16a99a0979ab?w=800",
          geo_coordinates: {
            latitude: 48.13761,
            longitude: 11.57557,
          },
          place_address: "Viktualienmarkt 3, 80331 München",
          ticket_pricing: "Free entry; food costs vary",
          travel_time_each_location: "10 minutes walk from Deutsches Museum",
          best_time_to_visit: "Noon",
        },
        {
          place_name: "Nymphenburg Palace",
          place_details:
            "Baroque palace with immaculate gardens, showcasing a glimpse into royal life.",
          place_image_url:
            "https://images.unsplash.com/photo-1517633597437-7b6be7a9888c?w=800",
          geo_coordinates: {
            latitude: 48.14284,
            longitude: 11.56463,
          },
          place_address: "Schleißheimer Straße 26, 80690 München",
          ticket_pricing: "Approx. €13 per adult",
          travel_time_each_location: "15 minutes by tram from Viktualienmarkt",
          best_time_to_visit: "Afternoon",
        },
        {
          place_name: "Glowfish (Glockenbachviertel)",
          place_details:
            "Popular open‑air bar and live‑music venue in Munich’s nightlife hub.",
          place_image_url:
            "https://images.unsplash.com/photo-1494823986133-4f5e87b9425b?w=800",
          geo_coordinates: {
            latitude: 48.14171,
            longitude: 11.54912,
          },
          place_address: "Glockenbachstraße 49, 81663 München",
          ticket_pricing: "Approx. €10–15 cover plus drink costs",
          travel_time_each_location:
            "10 minutes by metro from Nymphenburg Palace",
          best_time_to_visit: "Evening for live performances",
        },
      ],
    },
    {
      day: 3,
      day_plan: "Adventure Day Trip",
      best_time_to_visit_day:
        "Early morning departure to maximize exploration time, afternoon return for a relaxed dinner",
      activities: [
        {
          place_name: "Neuschwanstein Castle",
          place_details:
            "Legendary 19th‑century palace nestled in the Bavarian Alps, famed for its fairy‑tale appearance.",
          place_image_url:
            "https://images.unsplash.com/photo-1526990875595-72a5d317ea1c?w=800",
          geo_coordinates: {
            latitude: 47.55797,
            longitude: 10.74982,
          },
          place_address: "Neuschwansteinstraße 20, 87645 Schwangau",
          ticket_pricing: "Approx. €15 per adult for guided tour",
          travel_time_each_location:
            "2 hours by rail from Munich central train station",
          best_time_to_visit: "Morning to avoid crowds",
        },
        {
          place_name: "Zum Augustiner",
          place_details:
            "Traditional Munich tavern offering classic Bavarian dishes, famous for its granite table and historic ambiance.",
          place_image_url:
            "https://images.unsplash.com/photo-1575377548743-d75670c3e2f5?w=800",
          geo_coordinates: {
            latitude: 48.13585,
            longitude: 11.58325,
          },
          place_address: "Pöppelstraße 11, 80334 München",
          ticket_pricing: "Approx. €25 per adult for a full dinner",
          travel_time_each_location:
            "10 minutes walk from Neuschwanstein halfway station",
          best_time_to_visit: "Evening, after the return journey",
        },
      ],
    },
  ],
};
