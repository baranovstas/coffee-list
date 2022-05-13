import coffeeListStyles from './CoffeeList.module.scss';

const CardsList = ({ coffee }) => (
  <ul className={coffeeListStyles.list}>{coffee}</ul>
);

export default CardsList;