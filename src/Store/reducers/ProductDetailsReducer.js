


export function ProductDetailsReducer(state={},action){
   
    switch(action.type){
        
    case 'ADD_PRODUCT' :{
        
        const currentProduct = {...action.payload}
        return currentProduct
    }

    default:
        return state
    }

}