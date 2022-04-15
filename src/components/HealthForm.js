import { Slider } from "@mui/material";
import React from "react";
import { sliderValues } from "../utils/SliderValues";
import { valueLabelFormat } from "../utils/valueLabelFormat";

const HealthForm = ({ data, setData }) => {
  return (
    <div>
      <h1 style={{ margin: "5px 0px", marginTop: "20px" }}>Health</h1>
      <p style={{ marginTop: "-5px", marginBottom: "40px" }}>
        How will you relate the following with health?{" "}
      </p>
      <p>
        <b>Education</b>
        <div style={{ padding: "0 20px" }}>
          <Slider
            aria-label="Health Edu Slider"
            defaultValue={8}
            step={1}
            valueLabelDisplay="auto"
            marks={sliderValues}
            max={16}
            valueLabelFormat={valueLabelFormat}
          />
        </div>
      </p>
      <p>
        <b>Economy</b>
        <div style={{ padding: "0 20px" }}>
          <Slider
            aria-label="Custom marks"
            defaultValue={8}
            step={1}
            valueLabelDisplay="auto"
            marks={sliderValues}
            max={16}
            valueLabelFormat={valueLabelFormat}
          />
        </div>
      </p>
    </div>
  );
};

export default HealthForm;
