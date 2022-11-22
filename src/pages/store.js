import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducer1/index";
const store = configureStore({ reducer: reducers }, {});
export default store;
