export function priceLowToHigh(products){
return {
    type : 'PRICE_LOW_TO_HIGH',
    payload: products
}
} 

export function priceHighToLow(products){
    return {
        type : 'PRICE_HIGH_TO_LOW',
        payload: products
    }
    } 