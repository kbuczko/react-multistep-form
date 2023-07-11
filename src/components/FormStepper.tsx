import {useState} from "react";
import {Stepper, Step} from "react-form-stepper";
import PersonalInfo from "./Steps/Step1/PersonalInfo";
import SelectPlan from "./Steps/SelectPlan";
import Addons from "./Steps/Addons";
import Finish from "./Steps/Finish";
import "./FormStepper.css";

const FormStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getSectionComponent = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <SelectPlan />;
      case 2:
        return <Addons />;
      case 3:
        return <Finish />;
      default:
        return null;
    }
  };
  return (
    <main>
      <Stepper activeStep={activeStep}>
        <Step onClick={() => setActiveStep(0)} />
        <Step onClick={() => setActiveStep(1)} />
        <Step onClick={() => setActiveStep(2)} />
        <Step onClick={() => setActiveStep(3)} />
      </Stepper>
      {getSectionComponent()}
      <div className="stepper-nav">
        {activeStep !== 0 && (
          <button onClick={() => setActiveStep(activeStep - 1)}>Go Back</button>
        )}
        {activeStep !== 3 && (
          <button onClick={() => setActiveStep(activeStep + 1)}>
            Next Step
          </button>
        )}
      </div>
    </main>
  );
};

export default FormStepper;
