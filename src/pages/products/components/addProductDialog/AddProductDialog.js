import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const isEmpty = value => value.length === 0;
export default function AddProductDialog(props) {
    const { open, onClose, onAddProduct } = props;
    const [values, setValues] = useState({
        name: '',
        type: '',
        lotId: '',
        hasBulk: false,
        hasRetail: false
    });
   
    const onChangeInputHandler = ({ target: { value, id } }) => {
        setValues({ ...values, [id]: value });
    };
    const onConfirm = () => {
        onAddProduct(values);
    };
    const handleChange = ({ target: { checked, id } }) => {
        setValues({ ...values, [id]: checked });
    };
    return (

        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add product</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    data-test="name-add-product"
                    onChange={onChangeInputHandler}
                    value={values.name}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="type"
                    label="Type"
                    type="text"
                    fullWidth
                    onChange={onChangeInputHandler}
                    data-test="type-add-product"
                    value={values.type}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lotId"
                    label="Lot id"
                    type="number"
                    fullWidth
                    onChange={onChangeInputHandler}
                    data-test="lot-id-add-product"
                    value={values.lotId}
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={values.hasBulk}
                            onChange={handleChange}
                            value="hasBulk"
                            id="hasBulk"
                            color="primary"
                        />
                    }
                    label="Has bulk"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={values.hasRetail}
                            onChange={handleChange}
                            value="hasRetail"
                            id="hasRetail"
                            color="primary"
                        />
                    }
                    label="Has Retail"
                />

            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onConfirm} data-test="button-add-product" disabled={
                    isEmpty(values.name) || isEmpty(values.type) || values.lotId <= 0
                }>
                    Add
          </Button>
                <Button onClick={onClose} color="secondary">
                    Cancel
          </Button>
            </DialogActions>
        </Dialog>
    );
}
