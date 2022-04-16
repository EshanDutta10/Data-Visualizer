import {
  Button,
  Card,
  CardActions,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Formhandler from "./components/Formhandler";
import { formatData } from "./utils/valueLabelFormat";

const steps = ["Crime", "Health", "Education"];

function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    c_h: 8,
    c_edu: 8,
    c_eco: 8,
    h_edu: 8,
    h_eco: 8,
    edu_eco: 8,
  });

  const onNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      let newData = {
        c_h: formatData(data.c_h),
        c_edu: formatData(data.c_edu),
        c_eco: formatData(data.c_eco),
        h_edu: formatData(data.h_edu),
        h_eco: formatData(data.h_eco),
        edu_eco: formatData(data.edu_eco),
      };
      console.log(newData);
    }
  };

  const onBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg">
      <Card sx={{ minWidth: 500, p: 5, minHeight: 500 }}>
        <CardContent>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Formhandler step={step} data={data} setData={setData} />
        </CardContent>
        <CardActions sx={{ justifyContent: "end" }}>
          {step > 0 && (
            <Button
              onClick={onBack}
              variant="contained"
              className="next"
              size="small"
            >
              Back
            </Button>
          )}
          <Button
            onClick={onNext}
            variant="contained"
            className="next"
            size="small"
          >
            {step < 2 ? "Next" : "Submit"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
