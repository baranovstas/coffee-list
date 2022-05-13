import { Grid } from '@mui/material';

import coffeeItemStyles from './CoffeeItem.module.scss';

function CoffeeItem({ title, infoItems }) {
  return (
    <Grid item sm={12} md={6} lg={4}>
      <div className={coffeeItemStyles.item}>
        <h3 className={coffeeItemStyles.title}>{title}</h3>
        {infoItems}
      </div>
    </Grid>
  );
}

export default CoffeeItem;