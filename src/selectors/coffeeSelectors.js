import { createSelector } from '@reduxjs/toolkit';

import CoffeeItemContainer from '../containers/CoffeeItemContainer';

function selectCoffeeData({ coffee: { coffeeData } }) {
  return coffeeData;
}

function selectIsFetched({ coffee: { isFetched } }) {
  return isFetched;
}

const selectCoffeeList = createSelector(
  selectCoffeeData,
  selectIsFetched,
  (coffeeData, isFetched) => {
    if (isFetched) {
      return coffeeData.map(
        function ({ blend_name, id, origin, notes }) {
          return (
            <CoffeeItemContainer
              title={blend_name}
              origin={origin}
              notes={notes}
              key={id}
            />
          );
        }
      );
    }
  }
);

export { selectCoffeeList };