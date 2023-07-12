import "./PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <section className="step__wrapper">
      <h1 className="step__header">Personal info</h1>
      <p className="step__description">
        Please provide your name, email address and phone number.
      </p>
      <label htmlFor="name">Name</label>
      <input
        className="info__input"
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
      />
      <label htmlFor="email">Email Address</label>
      <input
        className="info__input"
        type="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        className="info__input"
        type="tel"
        id="phone"
        placeholder="e.g. +1 234 567 890"
      />
    </section>
  );
};

export default PersonalInfo;
