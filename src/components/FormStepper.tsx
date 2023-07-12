import {useState} from "react";
import {Stepper, Step} from "react-form-stepper";
import PersonalInfo from "./Steps/Step1/PersonalInfo";
import SelectPlan from "./Steps/Step2/SelectPlan";
import Addons from "./Steps/Step3/Addons";
import Finish from "./Steps/Step4/Finish";
import "./FormStepper.css";

const FormStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmForm = () => {
    setIsConfirmed(true);
  };

  const getSectionComponent = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <SelectPlan />;
      case 2:
        return <Addons />;
      case 3:
        return <Finish isConfirmed={isConfirmed} />;
      default:
        return null;
    }
  };
  return (
    <main>
      <Stepper activeStep={activeStep}>
        <Step onClick={() => setActiveStep(0)} disabled={isConfirmed} />
        <Step onClick={() => setActiveStep(1)} disabled={isConfirmed} />
        <Step onClick={() => setActiveStep(2)} disabled={isConfirmed} />
        <Step onClick={() => setActiveStep(3)} disabled={isConfirmed} />
      </Stepper>
      {getSectionComponent()}
      {!isConfirmed && (
        <div className="stepper__nav">
          {activeStep !== 0 && (
            <button
              className="stepper__nav__back-btn"
              onClick={() => setActiveStep(activeStep - 1)}
            >
              Go Back
            </button>
          )}
          {activeStep !== 3 && (
            <button
              className="stepper__nav__btn"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Next Step
            </button>
          )}
          {activeStep === 3 && (
            <button className="stepper__nav__btn" onClick={handleConfirmForm}>
              Confirm
            </button>
          )}
        </div>
      )}
    </main>
  );
};

export default FormStepper;
