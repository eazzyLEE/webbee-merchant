import { Dispatch } from "react";
import { CLEAR_STATE, SET_CATEGORY, SET_MACHINE } from "../actions/types";
import { Action, CategoryState } from "./types";

const initialState = {
    categories: [],
    machines: [],
};
  
export default (state: CategoryState = initialState, action: Action) => {
    switch (action.type) {
      case SET_CATEGORY: {
        const categoryData = [...state.categories];
        const lastId = categoryData?.[categoryData.length - 1]?.id || 0;
        Object.assign(action.payload, {id: lastId + 1});
        categoryData.push(action.payload);

        return {
          ...state,
          categories: categoryData,
        };
      };

      case SET_MACHINE: {
        return {
            ...state,
            machines: action.payload,
        };
      };

      case CLEAR_STATE:
        return initialState;

      default:
        return state;
    }
};