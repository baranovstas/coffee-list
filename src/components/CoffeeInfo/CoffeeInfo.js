import coffeeInfoStyles from './CoffeeInfo.module.scss';

function CoffeeInfo({ infoCaption, infoText }) {
  return (
    <div className={coffeeInfoStyles.info}>
      <strong className={coffeeInfoStyles.caption}>
        {infoCaption}
      </strong>
      <p>{infoText}</p>
    </div>
  );
}

export default CoffeeInfo;