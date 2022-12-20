import { createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";

import CategoryReducer from "./reducers/category.reducer";
import BookReducer from "./reducers/books.reducer";
// import CartReducer from "./reducers/cart.reducer";
// import OrderReducer from "./reducers/order.reducer";
// import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  books: BookReducer,
  // cart: CartReducer,
  // orders: OrderReducer,
  // auth: AuthReducer,
});


export default createStore(RootReducer);