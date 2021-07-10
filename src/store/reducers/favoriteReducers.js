import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/favoriteActions"


const initialState = {
    favoriteItems:[]
}

export default function FavoriteReducer(state=initialState, {type, payload}) {
    
    switch (type) {
        case ADD_TO_FAVORITE:
            let product = state.favoriteItems.find(f=>f.product.id===payload.id)
            if (product) {
                return{
                    ...state,
                };
            } else {
                return{
                    ...state,
                    favoriteItems : [...state.favoriteItems, {product:payload}]
                }
            }
            case REMOVE_FROM_FAVORITE:
                return{
                    ...state,
                    favoriteItems:state.favoriteItems.filter(f=>f.product.id!==payload.id)
                }
    
        default:
            return state;
    }

}