import { combineReducers } from "redux";
import Categories from "./Categories";
import DishCategory from "./DishCategory";
import DishSearch from "./DishSearch";
import Products from "./Product";

const rootReducer = combineReducers({
    dish_cate: DishCategory,
    dish_search: DishSearch,
    product: Products,
    category: Categories
  })
  
  export default rootReducer;
