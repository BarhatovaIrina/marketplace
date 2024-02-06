import * as actions from './actionTypes'

export const addLike = id => ({
    type: actions.PRODUCT_LIKE,
    payload: { id }
})

export const removeLike = id => ({
    type: actions.PRODUCT_DISLIKE,
    payload: { id }
})

export const addProducts = (products) => ({
    type: actions.ADD_PRODUCTS,
    payload: { products }
});