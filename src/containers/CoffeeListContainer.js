import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../components/Spinner/Spinner';
import CoffeeList from '../components/СoffeeList/CoffeeList';
import Notification from '../components/Notification/Notification';

import { fetchCoffeeData } from '../reducers/coffeeSlice';
import { selectCoffeeList } from '../selectors/coffeeSelectors';

function CoffeeListContainer() {
  const dispatch = useDispatch();

  const coffeeList = useSelector(
    state => selectCoffeeList(state)
  );

  useEffect(() => {
    dispatch(fetchCoffeeData());
  }, [dispatch]);

  if (!coffeeList) return <Spinner />
  else if (coffeeList.length === 0) {
    return <Notification text='Список кофе пуст' />;
  }

  return <CoffeeList coffeeItems={coffeeList} />;
}

export default CoffeeListContainer;