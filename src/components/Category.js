import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/storeAction';


function Category(props){
console.log('category',props);

useEffect(() =>{
  changeCategory();
},[])

return (
  <div>

  </div>
)
}

const mapToStateProps = (state) =>{

   return{
     category:state.categories.category,
   }
}

const mapToDispatchProps = (dispatch, getState) =>({
 changeCategory :(data) => dispatch(actions.changeCategory(data)),
})


export default connect(mapToStateProps , mapToDispatchProps)(Category);