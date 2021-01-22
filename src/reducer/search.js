import { SEARCH_SUCCESS } from "../actions/types";

const initialState = { searchResult: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_SUCCESS:
      return { searchResult: payload.searchResult };
    default:
      return state;
  }
}
