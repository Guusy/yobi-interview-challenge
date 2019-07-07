
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
        display: "flex"
    }

}));
const Product = (props) => {

    const classes = useStyles();
    const { name, type, hasBulk, hasRetail,onRemoveProduct,lotId } = props
    const onRemoveHandler = () => {
        onRemoveProduct(lotId)
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography data-test="name" gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <div>
                        <Typography data-test="type">
                            {type}
                        </Typography>
                        <Typography className={classes.bulk}>
                            Bulk  {hasBulk ? <CheckCircle data-test="has-bulk" /> : <HighlightOff data-test="hasnt-bulk" />}
                        </Typography>
                        <Typography className={classes.retail}>
                            Retail  {hasRetail ? <CheckCircle data-test="has-retail" /> : <HighlightOff data-test="hasnt-retail" />}
                        </Typography>

                    </div>

                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary" data-test="remove-button" onClick={onRemoveHandler}>
                        Remove
                    </Button>

                </CardActions>
            </Card>
        </Grid>
    )
}
export default Product;

