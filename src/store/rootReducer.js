import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducers";
import favoriteReducer from "./reducers/favoriteReducers";



const rootReducer = combineReducers({ 
    cart :cartReducer,
    favorite:favoriteReducer
})

export default rootReducer;