import axios from 'axios';

export const getCategories = () => async dispatch => {
  let results = await axios.get('https://appbook-henok.herokuapp.com/category')
  dispatch(addCategories(results.data))
}

const addCategories = payload =>{
  return {
    type: 'CHANGE-CATEGORY',
    payload
  }
}
