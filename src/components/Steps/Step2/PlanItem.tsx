const PlanItem: React.FC<{
  iconSrc: string;
  title: string;
  price: number;
  billing: string;
}> = ({iconSrc, title, price, billing}) => {
  return (
    <div className="plan__radio">
      <img src={window.location.origin + iconSrc} alt="Arcade icon" />
      <div>
        <h2>{title}</h2>
        <p>
          ${price}/{billing}
        </p>
      </div>
    </div>
  );
};

export default PlanItem;
