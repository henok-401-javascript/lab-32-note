import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import * as actions from '../store/storeAction';


function Category(props){

const {getCategories , runCategory} = props;

let selectedCategory = [];
console.log('select',selectedCategory);
useEffect(() =>{
  getCategories();
},[getCategories])

for(let i = 0; i < props.categories.length; i++){

  selectedCategory.push(<Button key={i} variant="contained" color="secondary"
   onClick={() =>{
     runCategory(props.categories[i].categoryDisplayName);
    }}
   >
     {props.categories[i].categoryDisplayName}</Button>)
}

return (
  <div>
{selectedCategory}
  </div>
)
}

const mapToStateProps = (state) =>{

   return{
    categories:state.categories.categoryList,
   }
}

const mapToDispatchProps = (dispatch, getState) =>({
  runCategory :(payload) => dispatch(actions.runCategory(payload)),
  getCategories:(data) => dispatch(actions.getCategories(data)),
})


export default connect(mapToStateProps , mapToDispatchProps)(Category);