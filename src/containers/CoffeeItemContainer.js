import CoffeeInfo from '../components/CoffeeInfo/CoffeeInfo';
import CoffeeItem from '../components/CoffeeItem/CoffeeItem';

function CoffeeItemContainer({ origin, notes, ...props }) {
  const coffeInfoItemsData = [
    { infoCaption: 'Origin:', infoText: origin },
    { infoCaption: 'Notes:', infoText: notes }
  ];

  const coffeInfoItems = coffeInfoItemsData.map(
    function ({ infoCaption, infoText }) {
      return (
        <CoffeeInfo
          infoCaption={infoCaption}
          infoText={infoText}
          key={infoCaption}
        />
      );
    }
  );

  return (
    <CoffeeItem
      infoItems={coffeInfoItems}
      {...props}
    />
  );
}

export default CoffeeItemContainer;