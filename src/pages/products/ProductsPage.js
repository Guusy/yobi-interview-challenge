import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import propTypes from 'prop-types';
import Product from './components/product/ProductContainer';
import SearchTextfield from './components/searchTextfield/SearchTextfieldContainer';
import SelectSort from './components/selectSort/SelectSortContainer';
import AddProductDialog from './components/addProductDialog/AddProductDialog';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  cardGridContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "2em"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  addProduct: {
    justifyContent: "flex-end",
    display: "flex",
    marginBottom: "1em"
  }
}));


function ProductsPage(props) {
  const classes = useStyles();
  const {
    getProducts, isFetching, products, message, addProduct
  } = props;
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);
  const closeAddProduct = () => {
    setAddProductDialogOpen(false);
  };
  const onAddProductHandler = (product) => {
    closeAddProduct();
    addProduct(product);
  };
  const onClickAddProduct = () => {
    setAddProductDialogOpen(true);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Yobi
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Products Page
                        </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item>
                  <SearchTextfield></SearchTextfield>
                </Grid>
                <Grid item>
                  <SelectSort />
                </Grid>

              </Grid>

            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid item className={classes.addProduct}>
            <Button variant="contained"
              color="primary" data-test="add-product-button" onClick={onClickAddProduct}>
              Add product
            </Button>
          </Grid>

          <Grid container spacing={4} >

            {products.map(product => <Product key={product.lotId} {...product} />)}

          </Grid>
          <div className={classes.cardGridContainer}>
            {isFetching && <CircularProgress data-test="spinner" className={classes.progress} />}

            {message
              && <Typography align="center" color="textPrimary" data-test="message">
                {message.value}
              </Typography>
            }
          </div>


        </Container>
      </main>
      <AddProductDialog open={addProductDialogOpen} onClose={closeAddProduct} onAddProduct={onAddProductHandler} />
    </React.Fragment>
  );
}

ProductsPage.defaultProps = {
  products: []
};
ProductsPage.propTypes = {
  products: propTypes.arrayOf(propTypes.shape({}))
};
export default ProductsPage;
