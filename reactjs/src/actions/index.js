import {CATEGORIES, GET_FOOD_CATEGORY, GET_FOOD_SEARCH, PRODUCTS } from "../const/action-types";

export const actSelectCategory = (data) => {
  return {
    type: GET_FOOD_CATEGORY,
    data, 
  };
};
export const actSearch = (data) => {
  return {
    type: GET_FOOD_SEARCH,
    data,
  };
};
export const actProducts = (data) => {
  return {
      type: PRODUCTS,
      data
  };
};
export const actCategories = (data) => {
  return {
      type: CATEGORIES,
      data
  };
};