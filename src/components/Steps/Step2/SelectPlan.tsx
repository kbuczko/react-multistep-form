import "./SelectPlan.css";
import arcade from "../../../images/icon-arcade.svg";
import advanced from "../../../images/icon-advanced.svg";
import pro from "../../../images/icon-pro.svg";

const SelectPlan = () => {
  return (
    <section className="step__wrapper">
      <h1 className="step__header">Select your plan</h1>
      <p className="step__description">
        You have the option of monthly or yearly billing.
      </p>
      <label htmlFor="arcade" className="plan__wrapper">
        <input type="radio" name="plan" id="arcade" />
        <div className="plan__radio">
          <img src={arcade} alt="Arcade icon" />
          <div>
            <h2>Arcade</h2>
            <p>$9/mo</p>
          </div>
        </div>
      </label>
      <label htmlFor="advanced" className="plan__wrapper">
        <input type="radio" name="plan" id="advanced" />
        <div className="plan__radio">
          <img src={advanced} alt="Advanced icon" />
          <div>
            <h2>Advanced</h2>
            <p>$12/mo</p>
          </div>
        </div>
      </label>
      <label htmlFor="pro" className="plan__wrapper">
        <input type="radio" name="plan" id="pro" />
        <div className="plan__radio">
          <img src={pro} alt="Pro icon" />
          <div>
            <h2>Pro</h2>
            <p>$15/mo</p>
          </div>
        </div>
      </label>
      <div className="plan__billing">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>Yearly</span>
      </div>
    </section>
  );
};

export default SelectPlan;
