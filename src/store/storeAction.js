import axios from 'axios';

 export const getCategories = () => async dispatch => {
  let results = await axios.get('https://appbook-henok.herokuapp.com/category')
  
  dispatch(changeCategory(results.data))
}

const changeCategory = payload =>{
  return {
    type: 'CHANGE-CATEGORY',
    payload
  }
}   
export const getProducts = () => async dispatch => {
  let results = await axios.get('http://api-body-products.herokuapp.com/product')
  console.log('result',results);
  dispatch(productAction(results.data));
}

const productAction = payload =>{
  return{
    type:'GET_PRODUCTS',
    payload,
  }
}

export const addCategories = payload =>{
  return{
    type: 'ADD_CATEGORY',
    payload
  }
}
export const addProducts = payload =>{
  return{
    type:'ADD_PRODUCTS',
    payload,
  }
}

