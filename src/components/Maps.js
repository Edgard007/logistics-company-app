import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Maps = ({ mapStyle, center, zoom, onClick, onLoad, children }) => {
  //* ==> STATES <== *//
  const zoomDef = 13;
  const centerDef = { lat: 41.881832, lng: -87.623177 };

  const containerStyle = {
    width: "600px",
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDJ7Ii01fg4UPRH1YVtqKvnnsJ_8OGUTSw",
    libraries: ["geometry", "drawing"],
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapStyle || containerStyle}
          center={center || centerDef}
          zoom={zoom || zoomDef}
          onClick={onClick && onClick}
          options={{
            streetViewControl: false,
          }}
          onLoad={onLoad && onLoad}
        >
          {children}
        </GoogleMap>
      )}
    </>
  );
};

export default Maps;
