
export function setProductsBwPriceRange(products,range){
    return {
        type : "SET_PRODUCTS_BW_PRICE_RANGE",
        payload1: products,
        payload2: range
    }

}