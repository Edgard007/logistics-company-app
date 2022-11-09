import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";

import styled from "styled-components";
import { Alert } from "antd";

// ==> Components
import Maps from "../components/Maps";

// ==> Actions
import { savePackages } from "../store/actions/packagesAction";

const AddPackages = ({ packages = [], onClose, onOk }) => {
  //* ==> STATES <== *//
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==> Form
  const [name, setName] = useState("");
  const [location, setLocation] = useState({});

  const initialState = () => {
    setLoading(false);
    setError(false);

    setName("");
    setLocation("");
  };

  const onClick = (...args) => {
    const lat = args[0].latLng.lat();
    const lng = args[0].latLng.lng();

    setLocation({
      lat: lat || null,
      lng: lng || null,
    });
  };

  const onLoad = (map) => {
    map.setOptions({
      draggableCursor: "crosshair",
      draggingCursor: "pointer",
    });
  };

  const search = () => {
    const find = (packages || []).find(
      (el) =>
        el?.location?.lat === location?.lat &&
        el?.location?.lng === location?.lng &&
        el?.status === "I"
    );

    if (find) setError("A package is already registered at this location");
    else {
      setError(""); // ==> Clear error
      save(); // ==> Save package
    }
  };

  const save = async () => {
    setLoading(true); //==> Show loading

    const body = {
      name: name || "",
      status: "I",
      statusName: "Registered",
      location: { ...location },
    };

    const res = await savePackages(body);
    if (res) {
      initialState();
      onOk && onOk();
    } else setError("Error saving information");

    setLoading(false); // ==> Hide loading
  };

  const validForm = () => {
    if (!(name && Object.keys(location).length)) {
      setError("Please fill in the form");
    } else {
      setError(""); // ==> Clear error
      search(); // ==> Find packages
    }
  };

  return (
    <Wrapper>
      <div className="title">
        <h1>Add new package</h1>
      </div>
      <div className="containBody">
        <div className="input-div">
          <label>Package name</label>
          <input
            placeholder="Enter package name"
            onChange={(e) => setName(e?.target?.value)}
            value={name}
          />
        </div>
        <label>Package location</label>
        <Maps onClick={onClick} onLoad={onLoad}>
          {location && <Marker position={location} />}
        </Maps>
        {error && (
          <div className="contain-error">
            <Alert
              description={error || ""}
              type="error"
              showIcon
              style={{
                width: "100%",
              }}
            />
          </div>
        )}
        <div className="contain-btns">
          <button
            type="button"
            className="btn-Secundary"
            onClick={() => onClose && onClose()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn-Secundary"
            onClick={() => validForm()}
            disabled={loading}
          >
            Save
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 20px 0;

    h1 {
      font-size: 25px;
      font-weight: bold;
      text-align: center;
    }
  }

  .input-div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0;
  }

  label {
    color: ${(props) => props?.theme?.blue};
    font-weight: 400;
    font-size: 15px;
  }

  .contain-btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
  }

  .contain-error {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
`;

export default AddPackages;
