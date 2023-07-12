import "./Addons.css";

const Addons = () => {
  return (
    <section className="step__wrapper">
      <h1 className="step__header">Pick add-ons</h1>
      <p className="step__description">
        Add-ons help enhance your gaming experience
      </p>
      <div id="checkboxes">
        <label className="whatever" htmlFor="r1">
          <input type="checkbox" name="rGroup" value="1" id="r1" />
          <div>
            <span className="d-block addon__title">Online service</span>
            <span className="d-block addon__description">
              Access to multiplayer games
            </span>
          </div>
          <span className="addon__price">+$1/mo</span>
        </label>
        <label className="whatever" htmlFor="r2">
          <input type="checkbox" name="rGroup" value="2" id="r2" />
          <div>
            <span className="d-block addon__title">Larger storage</span>
            <span className="d-block addon__description">
              Extra 1TB of cloud save
            </span>
          </div>
          <span className="addon__price">+$2/mo</span>
        </label>
        <label className="whatever" htmlFor="r3">
          <input type="checkbox" name="rGroup" value="3" id="r3" />
          <div>
            <span className="d-block addon__title">Customizable profile</span>
            <span className="d-block addon__description">
              Custom theme on your profile
            </span>
          </div>
          <span className="addon__price">+$2/mo</span>
        </label>
      </div>
    </section>
  );
};

export default Addons;
