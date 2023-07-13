import {Addon} from "../../../models/Addon";
import "./Addons.css";

const Addons: React.FC<{
  isConfirmed: boolean;
  isYearlyPlan: boolean;
  backToPreviousStep: () => void;
  moveToNextStep: () => void;
  addOns: Addon[];
  onChangeAddons: (addon: Addon) => void;
  selectedAddons: Addon[];
}> = ({
  isConfirmed,
  isYearlyPlan,
  backToPreviousStep,
  moveToNextStep,
  addOns,
  onChangeAddons,
  selectedAddons,
}) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    moveToNextStep();
  };
  const isCheckboxSelected = (box: Addon) => {
    const foundRecord = selectedAddons.findIndex(
      (addon) => addon.id === box.id
    );
    return foundRecord !== -1 ? true : false;
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <section className="step__wrapper">
        <h1 className="step__header">Pick add-ons</h1>
        <p className="step__description">
          Add-ons help enhance your gaming experience
        </p>
        <div id="checkboxes">
          {addOns.map((addon) => (
            <label
              className="checkbox__wrapper"
              htmlFor={addon.id}
              key={addon.id}
            >
              <input
                type="checkbox"
                name={addon.title}
                value={addon.id}
                id={addon.id}
                onChange={() => onChangeAddons(addon)}
                checked={isCheckboxSelected(addon)}
              />
              <div>
                <span className="d-block addon__title">{addon.title}</span>
                <span className="d-block addon__description">
                  {addon.description}
                </span>
              </div>
              <span className="addon__price">
                +$
                {isYearlyPlan
                  ? `${addon.yearlyFee}/yr`
                  : `${addon.monthlyFee}/mo`}
              </span>
            </label>
          ))}
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

export default Addons;
