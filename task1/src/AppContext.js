import { createContext } from 'react';

const appContext = createContext({
    setCurProduct: (product) => {},
    curProduct: null,
    setAllProducts: (products) => {},
    allProducts: [],
    productCount: 0,
    setProductCount: (cnt) => {}
})

export { appContext }