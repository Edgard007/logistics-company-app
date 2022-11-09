import React, { useState } from "react";
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
  const [direction, setDirection] = useState([]);

  const containerStyle = {
    width: "100%",
    height: "700px",
  };

  const dirCall = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDirection((res) => [...res, response]);
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

        {(direction || []).map((el) => (
          <DirectionsRenderer
            options={{
              directions: el,
              suppressMarkers: true,
              preserveViewport: true,
            }}
          />
        ))}

        {(packages || []).map((el, i) => (
          <DirectionsService
            options={{
              origin: packages[i]?.location,
              destination: packages[i + 1]?.location,
              travelMode: "DRIVING",
            }}
            callback={(res) => dirCall(res)}
          />
        ))}
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
