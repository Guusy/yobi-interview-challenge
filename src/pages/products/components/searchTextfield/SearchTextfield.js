import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const SearchTextfield = (props) => {
  const { onChange, value } = props;
  const onChangeHandler = ({ target: { value } }) => {
    onChange(value);
  };
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
                    onChange={onChangeHandler}
                    value={value}
                />
            </form>
        </Grid>
    </Grid>;
};

export default SearchTextfield;
