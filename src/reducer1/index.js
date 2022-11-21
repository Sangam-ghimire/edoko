import { combineReducers } from "redux";
import {
  productReducer,
  selectedproductReducer,
  cartproductReducer,
} from "./productReducer1";
const reducers = combineReducers({
  allProducts: productReducer,
  singleProduct: selectedproductReducer,
  cartProducts: cartproductReducer,
  //quantitycounter:counter,
});
export default reducers;
