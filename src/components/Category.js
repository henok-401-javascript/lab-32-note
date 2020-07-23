import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import * as actions from '../store/storeAction';


function Category(props){

const {getCategories , addCategories} = props;

let selectedCategory = [];

useEffect(() =>{
  getCategories();
},[getCategories])

for(let i = 0; i < props.category.length; i++){

  selectedCategory.push(<Button key={i} variant="contained" color="secondary" onClick={getCategories}>{props.category[i].categoryDisplayName}</Button>)
}

return (
  <div>
{selectedCategory}
  </div>
)
}

const mapToStateProps = (state) =>{

   return{
     category:state.categories.categoryList,
   }
}

const mapToDispatchProps = (dispatch, getState) =>({
  getCategories :(data) => dispatch(actions.getCategories(data)),
  addCategories:(data) => dispatch(actions.addCategories(data)),
})


export default connect(mapToStateProps , mapToDispatchProps)(Category);