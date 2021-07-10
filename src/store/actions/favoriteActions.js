export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
export const REMOVE_FROM_FAVORITE = "REMOVE_TO_FAVORITE"

export function addToFavorite(product){ 
    return{
        type: "ADD_TO_FAVORITE",
        payload: product
    }
}

export function removeFromFavorite(product){ 
    return{
        type: "REMOVE_TO_FAVORITE",
        payload: product
    }
}