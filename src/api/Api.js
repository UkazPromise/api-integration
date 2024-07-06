import axios from 'axios';

export const fetchProducts = async (dispatch) => {
  dispatch({ type: 'FETCH_LOADING' });

  try {
    const response = await axios.get('http://3.88.1.181:8000/products/public/catalog?supplier=FragranceNet&first=0&last=10');
    console.log('API response:', response.data);
    dispatch({ type: 'FETCH_SUCCESS', payload: Array.isArray(response.data) ? response.data : [] });
  } catch (error) {
    console.error('Error fetching data:', error);
    dispatch({ type: 'FETCH_ERROR', payload: error.message });
  }
};