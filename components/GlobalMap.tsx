import React, { useEffect, useRef } from "react";
// @ts-ignore
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || "";

const GlobalMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current ?? '', // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 1.7, // starting zoom
      projection: 'globe' // display the map as a 3D globe
    });
  }, []);
  return <div>
    <div ref={mapContainerRef}
        style={{
            width: "95%",
            height: "85vh",
            borderRadius: "8px",
        }}
    ></div>
  </div>;
};

export default GlobalMap;
