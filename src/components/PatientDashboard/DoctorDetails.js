import React from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "../../../node_modules/maplibre-gl/dist/maplibre-gl.css"

const DoctorDetails = () => {
  return (
    <div className="container-fluid p-0 flex-grow-1">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=eeBPeosrVoyGjAaRp1SR "
      >
        <NavigationControl position="top-left" />
        <Marker longitude={16.62662018} latitude={49.2125578} color="#61dbfb"></Marker>
      </Map>
    </div>
  );
};

export default DoctorDetails;
