import { Slider } from "@mui/material";
import React from "react";
import { sliderValues } from "../utils/SliderValues";
import { valueLabelFormat } from "../utils/valueLabelFormat";

const CrimeForm = ({ data, setData }) => {
  return (
    <div>
      <h1 style={{ margin: "5px 0px", marginTop: "20px" }}>Crime</h1>
      <p style={{ marginTop: "-5px", marginBottom: "40px" }}>
        How will you relate the following with crime?{" "}
      </p>
      <p>
        <b>Health</b>
        <div style={{ padding: "0 20px" }}>
          <Slider
            aria-label="Crime Health Slider"
            value={data.c_h}
            step={1}
            valueLabelDisplay="auto"
            marks={sliderValues}
            max={16}
            valueLabelFormat={valueLabelFormat}
            onChange={(e, newVal) => {
              if (typeof newVal === "number") {
                setData({ ...data, c_h: newVal });
              }
            }}
          />
        </div>
      </p>
      <p>
        <b>Education</b>
        <div style={{ padding: "0 20px" }}>
          <Slider
            aria-label="Crime Edu Slider"
            value={data.c_edu}
            step={1}
            valueLabelDisplay="auto"
            marks={sliderValues}
            max={16}
            valueLabelFormat={valueLabelFormat}
            onChange={(e, newVal) => {
              if (typeof newVal === "number") {
                setData({ ...data, c_edu: newVal });
              }
            }}
          />
        </div>
      </p>
      <p>
        <b>Economy</b>
        <div style={{ padding: "0 20px" }}>
          <Slider
            aria-label="Crime Eco Slider"
            value={data.c_eco}
            step={1}
            valueLabelDisplay="auto"
            marks={sliderValues}
            max={16}
            valueLabelFormat={valueLabelFormat}
            onChange={(e, newVal) => {
              if (typeof newVal === "number") {
                setData({ ...data, c_eco: newVal });
              }
            }}
          />
        </div>
      </p>
    </div>
  );
};

export default CrimeForm;
