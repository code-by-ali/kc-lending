"use client";
import React, { useEffect, useRef } from "react";

export default function MapSection() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Only initialize if map hasn't been created yet
    if (mapInstanceRef.current || !mapRef.current) return;

    // Load Leaflet CSS and JS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;

    script.onload = () => {
      if (window.L && mapRef.current && !mapInstanceRef.current) {
        // Initialize map centered on New York
        const map = window.L.map(mapRef.current).setView(
          [40.7128, -74.006],
          10
        );

        // Add OpenStreetMap tiles
        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 19,
          }
        ).addTo(map);

        // // Add a marker for the location
        // const marker = window.L.marker([40.7128, -74.006]).addTo(map);
        // marker.bindPopup("<b>New York</b><br>Our Location").openPopup();

        mapInstanceRef.current = map;

        // Handle resize
        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <div ref={mapRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
