import "./ConfirmedForm.css";
import thanks from "../../../images/icon-thank-you.svg";

const ConfirmedForm = () => {
  return (
    <article className="confirm__wrapper">
      <img className="confirm__icon" src={thanks} alt="Thanks icon" />
      <h1 className="step__header">Thank you!</h1>
      <p className="step__description">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </article>
  );
};

export default ConfirmedForm;
