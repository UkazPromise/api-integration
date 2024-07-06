import React, { createContext, useReducer } from 'react';
import { fetchProducts } from '../api/Api';

const ApiContext = createContext();

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_LOADING':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload || [] };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  React.useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;