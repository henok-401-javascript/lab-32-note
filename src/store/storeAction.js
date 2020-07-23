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
export const addCategories = payload =>{
  return{
    type: 'ADD_CATEGORY',
    payload
  }
}

