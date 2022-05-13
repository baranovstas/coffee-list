import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';
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

  if (!coffeeList) return <Spinner />;
  if (coffeeList && coffeeList.length === 0) {
    return <Notification text='Список кофе пуст' />;
  }

  // return <Grid container spacing={2.5}>{coffeeList}</Grid>;
  return <CoffeeList coffee={coffeeList} />;
}

export default CoffeeListContainer;