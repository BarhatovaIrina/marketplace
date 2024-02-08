import * as actions from './actionTypes'

export const addLike = id => ({
    type: actions.PRODUCT_LIKE,
    payload: id
})

export const removeLike = id => ({
    type: actions.PRODUCT_DISLIKE,
    payload: id
})

export const addProducts = data => ({
    type: actions.ADD_PRODUCTS,
    payload: data
})

export const deleteProduct = id => ({
    type: actions.PRODUCT_DELETE,
    payload: id
})