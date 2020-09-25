const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart : [],
    products : [
        {name:'banana', id:1},
        {name:'apple', id:2},
        {name:'orange', id:3},
        {name:'lemon', id:4}
    ]
};
export const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const newItem = {
                productId : action.id,
                name : action.name,
                cartId : state.cart.length + 1
            };
            return { products : state.products, cart : [...state.cart, newItem] };
        case REMOVE_FROM_CART:
            const newCart = state.cart.filter(item=> item.cartId !== action.id);
            return { ...state, cart : newCart }; // at 15 no line products : state.products and ...state are same
        default:
            return state;
    };
};