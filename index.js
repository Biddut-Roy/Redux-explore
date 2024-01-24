const { createStore } = require("redux");

const GET_PRODUCT = "GET_PRODUCT"
const ADD_PRODUCT = "ADD_PRODUCT"

const initialProductStore={
   product:["sugar","solt"],
   productCount: 2
}

const getProduct = () => {
    return{
        type: GET_PRODUCT
    }
};

const addProduct = (product) => {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
};

const productReducer = (state= initialProductStore , action) =>{
    switch (action.type){
        case GET_PRODUCT:
            return{
                ...state
            }
        case ADD_PRODUCT:
            return{
                product: [...state.product, action.payload],
                productCount: state.productCount + 1
            }

        default:
            return{
                ...state
            }
    }
}


const store = createStore(productReducer)
 store.subscribe(()=>{
    console.log(store.getState());
 })

 store.dispatch(getProduct())
 store.dispatch(addProduct("hor"))