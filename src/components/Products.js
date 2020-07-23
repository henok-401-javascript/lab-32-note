import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/storeAction';

function Product(props){
console.log('products data',props.product)

for(let i = 0; i < props.product.length;i++){

}
  return (
    <div>
      
    </div>
  )
}


const mapToStateProps = (state) =>{
  return{
   product:state.products.allProducts,
  }
}
const mapDispatchToProps = (dispatch , getState) =>{
return{
  getProducts:(data) => dispatch(actions.getProducts(data)), 
  addProducts:(data) => dispatch(actions.addProducts(data)), 
}
}



export default connect(mapToStateProps , mapDispatchToProps)(Product);