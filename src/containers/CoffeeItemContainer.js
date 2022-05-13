import CoffeeInfo from '../components/CoffeeInfo/CoffeeInfo';
import CoffeeItem from '../components/CoffeeItem/CoffeeItem';

function CoffeeItemContainer({ origin, notes, ...props }) {
  // подготовка данных для вывода на странице блоков с названием кофе и его тегами
  const coffeInfoItemsData = [
    { infoCaption: 'Происхождение:', infoText: origin },
    { infoCaption: 'Теги:', infoText: notes }
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

  return <CoffeeItem infoItems={coffeInfoItems} {...props} />;
}

export default CoffeeItemContainer;