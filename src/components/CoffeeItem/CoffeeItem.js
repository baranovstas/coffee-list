import { Grid, Typography } from '@mui/material';

import coffeeItemStyles from './CoffeeItem.module.scss';

function CoffeeItem({ title, infoItems }) {
  // return (
  //   <Grid
  //     item
  //     xs={12}
  //     sm={6}
  //     lg={4}
  //   >
  //     <Typography component='h3'>
  //       {title}
  //     </Typography>
  //     {/* <h3 className={coffeeItemStyles.title}>{title}</h3> */}
  //     <p className={coffeeItemStyles.origin}>{origin}</p>
  //     <p className={coffeeItemStyles.notes}>{notes}</p>
  //   </Grid>
  // );
  return (
    <li className={coffeeItemStyles.item}>
      <h3 className={coffeeItemStyles.title}>{title}</h3>
      {infoItems}
    </li>
  );
}

export default CoffeeItem;