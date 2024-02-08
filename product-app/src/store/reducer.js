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
                likedProducts: [...state.likedProducts, action.payload]
            };
        case actions.PRODUCT_DISLIKE:
            return {
                ...state,
                likedProducts: state.likedProducts.filter(id => id !== action.payload)
            };
        case actions.ADD_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                isLoading: action.payload.isLoading
            };
        case actions.PRODUCT_DELETE:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        default:
            return state;
    }
}