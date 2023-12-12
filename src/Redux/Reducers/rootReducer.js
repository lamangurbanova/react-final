import { combineReducers } from "redux";
import { getHomeProductReducer } from "./productReducer";
import formReducer from "./formReducer";


export const rootReducer = combineReducers({
  homeProducts: getHomeProductReducer,
  form: formReducer,
  // productItem: getProductItemReducer,
  // cartItems: CartReducer
})