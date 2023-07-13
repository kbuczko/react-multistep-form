import "./PersonalInfo.css";

const PersonalInfo: React.FC<{
  onFormChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  email: string;
  phone: string;
  isConfirmed: boolean;
  setActiveStep: () => void;
}> = ({onFormChange, name, email, phone, isConfirmed, setActiveStep}) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      phone.trim().length > 0 &&
      phone.trim().length < 10
    ) {
      setActiveStep();
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
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
          name="name"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={onFormChange}
          required
        />
        <label htmlFor="email">Email Address</label>
        <input
          className="info__input"
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={onFormChange}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          className="info__input"
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={onFormChange}
          required
        />
      </section>
      {!isConfirmed && (
        <div className="stepper__nav">
          <button className="stepper__nav__btn" type="submit">
            Next Step
          </button>
        </div>
      )}
    </form>
  );
};

export default PersonalInfo;
