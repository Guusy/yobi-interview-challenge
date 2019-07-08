
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CheckCircle from '@material-ui/icons/CheckCircle';
import HighlightOff from '@material-ui/icons/HighlightOff';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  bulk: {
    display: 'flex'
  },
  retail: {
    display: "flex"
  },
  iconLabel: {
    marginRight: "0.5em"
  },
  cardActions: {
    justifyContent: "flex-end"
  }

}));
const Product = (props) => {
  const classes = useStyles();
  const {
    name, type, hasBulk, hasRetail, onRemoveProduct, lotId
  } = props;
  const onRemoveHandler = () => {
    onRemoveProduct(lotId);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography data-test="name" gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <div>
            <Typography >
              Type : <span data-test="type">{type}</span>
            </Typography>
            <Typography className={classes.bulk}>
              <span className={classes.iconLabel}>Has Bulk</span>  {hasBulk ? <CheckCircle data-test="has-bulk" /> : <HighlightOff data-test="hasnt-bulk" />}
            </Typography>
            <Typography className={classes.retail}>
              <span className={classes.iconLabel}>Has Retail</span>   {hasRetail ? <CheckCircle data-test="has-retail" /> : <HighlightOff data-test="hasnt-retail" />}
            </Typography>

          </div>

        </CardContent>
        <CardActions className={classes.cardActions} >
          <Button size="small" color="secondary" data-test="remove-button" onClick={onRemoveHandler} cursor="pointer">
            Remove
                    </Button>

        </CardActions>
      </Card>
    </Grid>
  );
};
export default Product;
