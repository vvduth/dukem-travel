import React, { useEffect, useRef } from "react";
// @ts-ignore
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useTripDetails } from "@/app/provider";
import { Activity } from "@/types";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || "";

const GlobalMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const { tripDetailsInfo } = useTripDetails();

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-74.5, 40], // Default center
      zoom: 1.7,
      projection: "globe" // Display the map as a 3D globe
    });

    mapRef.current = map;

    // Wait for map to load
    map.on('load', () => {
      if (!tripDetailsInfo) return;

      const bounds = new mapboxgl.LngLatBounds();
      let hasCoordinates = false;

      // Add markers for hotels (blue markers)
      tripDetailsInfo.hotels?.forEach((hotel, index) => {
        const { longitude, latitude } = hotel.geo_coordinates;
        
        // Create popup for hotel
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div style="padding: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">${hotel.hotel_name}</h3>
            <p style="font-size: 12px; color: #666;">${hotel.hotel_address}</p>
            <p style="font-size: 12px; margin-top: 4px;">⭐ ${hotel.rating} | ${hotel.price_per_night}</p>
          </div>
        `);

        // Add hotel marker
        new mapboxgl.Marker({ 
          color: "#3b82f6", // Blue for hotels
          scale: 0.8
        })
          .setLngLat([longitude, latitude])
          .setPopup(popup)
          .addTo(map);

        bounds.extend([longitude, latitude]);
        hasCoordinates = true;
      });

      // Add markers for activities (red markers with day numbers)
      tripDetailsInfo.itinerary?.forEach((day) => {
        day.activities?.forEach((activity: Activity, activityIndex) => {
          const { longitude, latitude } = activity.geo_coordinates;

          // Create custom marker element with day number
          const el = document.createElement('div');
          el.className = 'custom-marker';
          el.style.backgroundColor = '#ef4444'; // Red
          el.style.width = '30px';
          el.style.height = '30px';
          el.style.borderRadius = '50%';
          el.style.display = 'flex';
          el.style.alignItems = 'center';
          el.style.justifyContent = 'center';
          el.style.color = 'white';
          el.style.fontWeight = 'bold';
          el.style.fontSize = '12px';
          el.style.border = '2px solid white';
          el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
          el.style.cursor = 'pointer';
          el.textContent = `${day.day}`;

          // Create popup for activity
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div style="padding: 8px; max-width: 250px;">
              <div style="background: #ef4444; color: white; padding: 4px 8px; border-radius: 4px; margin-bottom: 8px; font-size: 11px; font-weight: bold;">
                Day ${day.day} - Activity ${activityIndex + 1}
              </div>
              <h3 style="font-weight: bold; margin-bottom: 4px; font-size: 14px;">${activity.place_name}</h3>
              <p style="font-size: 12px; color: #666; margin-bottom: 4px;">${activity.place_details}</p>
              <p style="font-size: 11px; color: #999;">📍 ${activity.place_address}</p>
              <p style="font-size: 11px; color: #999;">💰 ${activity.ticket_pricing}</p>
              <p style="font-size: 11px; color: #999;">⏰ ${activity.best_time_to_visit}</p>
              <p style="font-size: 11px; color: #999;">🚗 ${activity.travel_time_each_location}</p>
            </div>
          `);

          // Add activity marker
          new mapboxgl.Marker({ element: el })
            .setLngLat([longitude, latitude])
            .setPopup(popup)
            .addTo(map);

          bounds.extend([longitude, latitude]);
          hasCoordinates = true;
        });
      });

      // Fit map to show all markers
      if (hasCoordinates) {
        map.fitBounds(bounds, {
          padding: { top: 50, bottom: 50, left: 50, right: 50 },
          maxZoom: 13
        });
      }
    });

    // Cleanup
    return () => {
      map.remove();
    };
  }, [tripDetailsInfo]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        ref={mapContainerRef}
        style={{
          width: "95%",
          height: "85vh",
          borderRadius: "8px",
          margin: "0 auto"
        }}
      />
      
      {/* Legend */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'white',
        padding: '12px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        fontSize: '12px',
        zIndex: 1
      }}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Legend</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: '#3b82f6',
            marginRight: '8px'
          }} />
          Hotels
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: '#ef4444',
            marginRight: '8px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold'
          }}>
            #
          </div>
          Activities (Day #)
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;