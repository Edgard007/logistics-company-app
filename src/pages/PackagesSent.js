import React, { useEffect, useState } from "react";
import {
  Marker,
  InfoWindow,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

import styled from "styled-components";

// ==> Components
import Maps from "../components/Maps";

const PackagesSent = ({ packages = [], onClose }) => {
  //* ==> STATES <== *//
  const [activeMarker, setActiveMarker] = useState(null);
  const [direction, setDirection] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "700px",
  };

  const dirCall = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDirection(response);
      }
    }
  };

  return (
    <Wrapper>
      <Maps
        mapStyle={containerStyle}
        onClick={() => setActiveMarker(null)}
        zoom={15}
        center={packages[0]?.location || ""}
      >
        {(packages || []).map((el) => (
          <Marker
            key={el?.id}
            position={el?.location}
            onClick={() => {
              if (el?.id !== activeMarker) setActiveMarker(el?.id);
              else return;
            }}
          >
            {activeMarker === el?.id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{el?.name || ""}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
        <DirectionsService
          options={{
            origin: packages[0]?.location,
            destination: packages[0 + 1]?.location,
            travelMode: "DRIVING",
          }}
          callback={(res) => !direction && dirCall(res)}
        />

        {direction && (
          <DirectionsRenderer
            options={{
              directions: direction,
              suppressMarkers: true,
              preserveViewport: true,
            }}
          />
        )}
      </Maps>

      <div className="contain-btns">
        <button
          type="button"
          className="btn-Secundary"
          onClick={() => onClose && onClose()}
        >
          Back
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .contain-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
`;

export default PackagesSent;
