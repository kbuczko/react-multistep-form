import {Addon} from "../../../models/Addon";
import {Plan} from "../../../models/Plan";
import ConfirmedForm from "./ConfirmedForm";
import "./Finish.css";

const Finish: React.FC<{
  isConfirmed: boolean;
  isYearlyPlan: boolean;
  onConfirmForm: () => void;
  plan: Plan;
  addons: Addon[];
  backToPreviousStep: () => void;
  backToPlanStep: () => void;
}> = ({
  isConfirmed,
  isYearlyPlan,
  onConfirmForm,
  plan,
  backToPreviousStep,
  addons,
  backToPlanStep,
}) => {
  const totalAddonsPrice = addons.reduce((acc, red) => acc + red.currentFee, 0);
  const totalCosts = plan.currentPrice + totalAddonsPrice;

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    onConfirmForm();
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <section className="step__wrapper">
        {!isConfirmed && (
          <>
            <h1 className="step__header">Finishing up</h1>
            <p className="step__description">
              Double-check everyting looks OK before confirming.
            </p>
            <article className="finish__wrapper">
              <div className="plan__wrapper">
                <div>
                  <span>
                    {plan.title} ({isYearlyPlan ? "Yearly" : "Monthly"})
                  </span>
                  <button onClick={backToPlanStep} className="plan__btn-change">
                    Change
                  </button>
                </div>
                <span className="plan__price">
                  ${plan.currentPrice}/{isYearlyPlan ? "yr" : "mo"}
                </span>
              </div>
              {addons.map((addon) => (
                <div className="addon__row" key={addon.title}>
                  <span>{addon.title}</span>
                  <span>
                    +${addon.currentFee}/{isYearlyPlan ? "yr" : "mo"}
                  </span>
                </div>
              ))}
            </article>
            <div className="addon__row finish__total">
              <span>Total (per {isYearlyPlan ? "Year" : "Month"})</span>{" "}
              <span>
                +${totalCosts}/{isYearlyPlan ? "yr" : "mo"}
              </span>
            </div>
          </>
        )}

        {isConfirmed && <ConfirmedForm />}
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
            Confirm
          </button>
        </div>
      )}
    </form>
  );
};

export default Finish;
