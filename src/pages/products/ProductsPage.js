import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Product from './components/product/ProductContainer';
import propTypes from 'prop-types';
import SearchTextfield from './components/searchTextfield/SearchTextfieldContainer';
import SelectSort from './components/selectSort/SelectSortContainer'
import AddProductDialog from './components/addProductDialog/AddProductDialog'
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
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    cardGridContainer: {
        display: "flex",
        justifyContent: "center"
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


function ProductsPage(props) {
    const classes = useStyles();
    const { getProducts, isFetching, products, message } = props

    useEffect(() => {
        getProducts()
    }, [])
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
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Products Page
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Add item
                  </Button>
                                </Grid>
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
                    <Grid container spacing={4} className={classes.cardGridContainer}>

                        {products.map(product => <Product key={product.lotId} {...product} />)}

                        {isFetching && <CircularProgress data-test="spinner" className={classes.progress} />}
                        {message &&
                            <Typography align="center" color="textPrimary" data-test="message">
                                {message.value}
                            </Typography>
                        }
                    </Grid>

                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
        </Typography>
            </footer>
            <AddProductDialog />
        </React.Fragment>
    );
}

ProductsPage.defaultProps = {
    products: []
}
ProductsPage.propTypes = {
    products: propTypes.arrayOf(propTypes.shape({}))
}
export default ProductsPage