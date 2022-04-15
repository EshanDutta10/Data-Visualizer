import React from "react";
import CrimeForm from "./CrimeForm";
import EducationForm from "./EducationForm";
import HealthForm from "./HealthForm";

const Formhandler = ({ step, data, setData }) => {
  return (
    <div>
      {step == 0 && <CrimeForm data={data} setData={setData} />}
      {step == 1 && <HealthForm data={data} setData={setData} />}
      {step == 2 && <EducationForm />}
    </div>
  );
};

export default Formhandler;
