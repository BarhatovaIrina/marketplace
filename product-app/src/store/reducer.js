import * as actions from './actionTypes';

const initialState = {
    likedProducts: [],
    products: [],
    isLoading: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.PRODUCT_LIKE:
            return {
                ...state,
                likedProducts: [...state.likedProducts, action.id]
            };
        case actions.PRODUCT_DISLIKE:
            return {
                ...state,
                likedProducts: state.likedProducts.filter(id => id !== action.id)
            };
        case actions.ADD_PRODUCTS:
            // console.log('add')
            // console.log(action.payload.products)
            // console.log(state.products)
            return {
                ...state,
                products: [action.payload.products]
            };
        default:
            return state;
    }
}