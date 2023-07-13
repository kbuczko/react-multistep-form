import "./SelectPlan.css";
import PlanItem from "./PlanItem";
import {Plan} from "../../../models/Plan";

const SelectPlan: React.FC<{
  isConfirmed: boolean;
  isYearlyPlan: boolean;
  backToPreviousStep: () => void;
  moveToNextStep: () => void;
  onChangePlan: (plan: Plan) => void;
  plan: Plan;
  availablePlans: Plan[];
  onChangePlanBilling: () => void;
}> = ({
  isConfirmed,
  backToPreviousStep,
  moveToNextStep,
  plan,
  availablePlans,
  onChangePlan,
  onChangePlanBilling,
  isYearlyPlan,
}) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (plan.title) {
      moveToNextStep();
    }
  };

  const handlePlanChange = (availablePlan: Plan) => {
    onChangePlan(availablePlan);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <section className="step__wrapper">
        <h1 className="step__header">Select your plan</h1>
        <p className="step__description">
          You have the option of monthly or yearly billing.
        </p>
        {availablePlans.map((availablePlan) => (
          <label
            key={availablePlan.id}
            htmlFor={availablePlan.id}
            className="plans__wrapper"
          >
            <input
              type="radio"
              name="plan"
              id={availablePlan.id}
              onChange={() => handlePlanChange(availablePlan)}
              value={availablePlan.id}
              checked={plan.id === availablePlan.id}
            />
            <PlanItem
              iconSrc={availablePlan.img}
              title={availablePlan.title}
              price={
                isYearlyPlan
                  ? availablePlan.yearlyPrice
                  : availablePlan.monthlyPrice
              }
              billing={isYearlyPlan ? "yr" : "mo"}
            />
          </label>
        ))}
        <div className="plan__billing">
          <span
            className={!isYearlyPlan ? "active__billing" : "inactive__billing"}
          >
            Monthly
          </span>
          <label className="switch">
            <input
              type="checkbox"
              onChange={onChangePlanBilling}
              checked={isYearlyPlan}
            />
            <span className="slider round"></span>
          </label>
          <span
            className={!isYearlyPlan ? "inactive__billing" : "active__billing"}
          >
            Yearly
          </span>
        </div>
      </section>
      {!isConfirmed && (
        <div className="stepper__nav">
          <button
            className="stepper__nav__back-btn"
            onClick={backToPreviousStep}
          >
            Go Back
          </button>
          <button className="stepper__nav__btn" type="submit">
            Next Step
          </button>
        </div>
      )}
    </form>
  );
};

export default SelectPlan;
