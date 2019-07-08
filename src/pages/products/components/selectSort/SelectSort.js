import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SelectSort = (props) => {
  const [sort, setSort] = useState('');
  const classes = useStyles();
  const { onSortDesc, onSortAsc } = props;
  const actionsMapper = {
    asc: onSortAsc,
    desc: onSortDesc
  };
  const handleChange = ({ target: { value } }) => {
    setSort(value);
    actionsMapper[value]();
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="sort-products">Sort by</InputLabel>
      <Select
        value={sort}
        onChange={handleChange}
        inputProps={{
          name: 'sort',
          id: 'sort-products',
        }}
        data-test="select-sort"
      >
        <MenuItem value='asc'>Asc</MenuItem>
        <MenuItem value='desc'>Desc</MenuItem>
      </Select>
    </FormControl>
  );
};
export default SelectSort;
