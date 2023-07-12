import {useState} from "react";
import ConfirmedForm from "./ConfirmedForm";
import "./Finish.css";

const Finish = ({isConfirmed}) => {
  return (
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
                <span>Arcade (Monthly)</span>
                <span>Change</span>
              </div>
              <span className="plan__price">$9/mo</span>
            </div>
            <div className="addon__row">
              <span>Online service</span> <span>+$1/mo</span>
            </div>
            <div className="addon__row">
              <span>Larger storage</span> <span>+$2/mo</span>
            </div>
          </article>
          <div className="addon__row finish__total">
            <span>Total (per month)</span> <span>+$12/mo</span>
          </div>
        </>
      )}
      {isConfirmed && <ConfirmedForm />}
    </section>
  );
};

export default Finish;
