import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const SearchTextfield = (props) => {
    const [product, setProduct] = useState('')
    const onChange = ({ target: { value } }) => {
        setProduct(value)
    }
    return <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
            <Search />
        </Grid>
        <Grid item>
            <form onSubmit={() => { }}>
                <TextField
                    data-test="text-field-product"
                    id="input-with-icon-grid"
                    label="Product name"
                    autoComplete="off"
                    onChange={onChange}
                    value={product}
                />
            </form>
        </Grid>
    </Grid>
}

export default SearchTextfield;