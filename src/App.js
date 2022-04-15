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

const steps = ["Crime", "Health", "Education"];

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    c_h: 8,
    c_edu: 8,
    c_eco: 8,
    h_edu: 9,
  });

  const onNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else console.log(data);
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
