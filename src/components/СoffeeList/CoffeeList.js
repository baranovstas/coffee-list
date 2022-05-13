import { Grid } from '@mui/material';

const CoffeeList = ({ coffeeItems }) => (
  <Grid container spacing={1.5}>{coffeeItems}</Grid>
);

export default CoffeeList;