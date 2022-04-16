import { Slider } from "@mui/material";
import React from "react";
import { sliderValues } from "../utils/SliderValues";
import { valueLabelFormat } from "../utils/valueLabelFormat";

const EducationForm = ({ data, setData }) => {
  return (
    <div>
      <h1 style={{ margin: "5px 0px", marginTop: "20px" }}>Education</h1>
      <p style={{ marginTop: "-5px", marginBottom: "40px" }}>
        How will you relate the following with education?{" "}
      </p>
      <p>
        <b>Economy</b>
        <div style={{ padding: "0 20px" }}>
          <Slider
            aria-label="Custom marks"
            value={data.edu_eco}
            step={1}
            valueLabelDisplay="auto"
            marks={sliderValues}
            max={16}
            valueLabelFormat={valueLabelFormat}
            onChange={(e, newVal) => {
              if (typeof newVal === "number") {
                setData({ ...data, edu_eco: newVal });
              }
            }}
          />
        </div>
      </p>
    </div>
  );
};

export default EducationForm;
