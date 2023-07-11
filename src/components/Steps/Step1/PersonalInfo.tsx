import "./PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <section className="info__wrapper">
      <h1>Personal info</h1>
      <p>Please provide your name, email address and phone number.</p>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </section>
  );
};

export default PersonalInfo;
