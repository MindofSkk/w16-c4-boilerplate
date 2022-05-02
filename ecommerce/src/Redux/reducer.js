import {
  ERR_DATA,
  FILTER_DATA,
  GET_DATA,
  REQ_DATA,
  SORT_DATA,
} from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQ_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
       
        products: [],
      };
    case ERR_DATA:
      return {
        ...state,
        isLoading: false,
        isError: true,      
        products: [],
      };
    case GET_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,        
        products: payload,
      };
   
    default:
      return state;
  }
};
export { reducer };