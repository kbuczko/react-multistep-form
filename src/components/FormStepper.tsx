import {useEffect, useState} from "react";
import {Stepper, Step} from "react-form-stepper";
import PersonalInfo from "./Steps/Step1/PersonalInfo";
import SelectPlan from "./Steps/Step2/SelectPlan";
import Addons from "./Steps/Step3/Addons";
import Finish from "./Steps/Step4/Finish";
import "./FormStepper.css";
import {Plan} from "../models/Plan";
import {Addon} from "../models/Addon";

const FormStepper = () => {
  const availablePlans: Plan[] = [
    {
      title: "Arcade",
      id: "arcade",
      currentPrice: 9,
      monthlyPrice: 9,
      yearlyPrice: 90,
      img: "/images/icon-arcade.svg",
    },
    {
      title: "Advanced",
      id: "advanced",
      currentPrice: 12,
      monthlyPrice: 12,
      yearlyPrice: 120,
      img: "/images/icon-advanced.svg",
    },
    {
      title: "Pro",
      id: "pro",
      currentPrice: 15,
      monthlyPrice: 15,
      yearlyPrice: 150,
      img: "/images/icon-pro.svg",
    },
  ];
  const addOns: Addon[] = [
    {
      id: "onlineService",
      title: "Online Service",
      description: "Access to multiplayer games",
      monthlyFee: 1,
      yearlyFee: 10,
      currentFee: 1,
    },
    {
      id: "largerStorage",
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyFee: 2,
      yearlyFee: 20,
      currentFee: 2,
    },
    {
      id: "customizableProfile",
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyFee: 2,
      yearlyFee: 20,
      currentFee: 2,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({} as Plan);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleChangeAddons = (event: Addon) => {
    const addonExists = selectedAddons.findIndex(
      (addon: Addon) => addon.id === event.id
    );
    if (addonExists === -1) {
      setSelectedAddons(
        (prevValue) =>
          [
            {
              ...event,
              currentFee: isYearly ? event.yearlyFee : event.monthlyFee,
            },
            ...prevValue,
          ] as any
      );
    } else {
      setSelectedAddons((prevValue) =>
        prevValue.filter((value: Addon) => value.id !== event.id)
      );
    }
  };

  const handleChangeBilling = () => {
    setIsYearly((prevState) => !prevState);
  };

  const handleSelectPlan = (event: Plan) => {
    setSelectedPlan({
      ...event,
      currentPrice: isYearly ? event.yearlyPrice : event.monthlyPrice,
    });
  };

  useEffect(() => {
    handleSelectPlan(selectedPlan);
    setSelectedAddons((prevValue) => {
      prevValue.forEach(
        (value: Addon) =>
          (value.currentFee = isYearly ? value.yearlyFee : value.monthlyFee)
      );
      return prevValue;
    });
  }, [isYearly]);

  const handleConfirmForm = () => {
    form.plan = {
      title: selectedPlan?.title,
      price: selectedPlan.currentPrice,
    };
    form.addons = selectedAddons;
    setIsConfirmed(true);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: {},
    addons: [],
  });

  const handleChangeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevFormState) => ({
      ...prevFormState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleMoveToStepClick = (stepNumber: number) => {
    if (!isConfirmed) {
      setActiveStep(stepNumber);
    }
  };

  const getSectionComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInfo
            onFormChange={handleChangeFormData}
            name={form.name}
            email={form.email}
            phone={form.phone}
            isConfirmed={isConfirmed}
            setActiveStep={() => setActiveStep(activeStep + 1)}
          />
        );
      case 1:
        return (
          <SelectPlan
            isConfirmed={isConfirmed}
            isYearlyPlan={isYearly}
            backToPreviousStep={() => setActiveStep(activeStep - 1)}
            moveToNextStep={() => setActiveStep(activeStep + 1)}
            onChangePlan={handleSelectPlan}
            plan={selectedPlan}
            availablePlans={availablePlans}
            onChangePlanBilling={handleChangeBilling}
          />
        );
      case 2:
        return (
          <Addons
            isConfirmed={isConfirmed}
            isYearlyPlan={isYearly}
            backToPreviousStep={() => setActiveStep(activeStep - 1)}
            moveToNextStep={() => setActiveStep(activeStep + 1)}
            addOns={addOns}
            onChangeAddons={handleChangeAddons}
            selectedAddons={selectedAddons}
          />
        );
      case 3:
        return (
          <Finish
            isConfirmed={isConfirmed}
            isYearlyPlan={isYearly}
            onConfirmForm={handleConfirmForm}
            plan={selectedPlan}
            backToPreviousStep={() => setActiveStep(activeStep - 1)}
            addons={selectedAddons}
            backToPlanStep={() => setActiveStep(1)}
          />
        );
      default:
        return null;
    }
  };
  return (
    <main>
      <Stepper activeStep={activeStep}>
        <Step onClick={() => handleMoveToStepClick(0)} />
        <Step onClick={() => handleMoveToStepClick(1)} />
        <Step onClick={() => handleMoveToStepClick(2)} />
        <Step onClick={() => handleMoveToStepClick(3)} />
      </Stepper>
      {getSectionComponent()}
    </main>
  );
};

export default FormStepper;
