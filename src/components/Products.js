import React, { useEffect } from 'react';

import ProductsContainer from '../containers/Products';

const Products = (props) => {
    const { getProducts } = props
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div>Show your list here</div>
    );
}

export default Products;
