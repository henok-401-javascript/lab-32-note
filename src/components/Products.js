import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import * as actions from '../store/storeAction';

function Product(props){
  const {getProducts , product , currentCategory , addProducts} = props;

  let listCategory = [];
useEffect(() =>{
 getProducts();
}, [getProducts])



for(let i = 0; i < product.length;i++){
if(product[i].category === currentCategory){
  listCategory.push(
    <div key={product[i]._id}>
      <img  src={product[i].img} alt=""/>
          <h2>{product[i].name}</h2>
    <Button variant="contained" color="primary"
    onClick={
      addProducts(product[i].name)
    }
    >
ADD TO CART
    </Button>
    </div>
  )
  }
}
console.log('what do i have',listCategory);
    return (
      <div>
        
        {listCategory}
      </div>
    )
}
const mapToStateProps = (state) =>{
  return{
   product:state.products.allProducts,
   currentCategory:state.categories.currentCategory,
  }
}
const mapDispatchToProps = (dispatch , getState) =>{
return{
  getProducts:(data) => dispatch(actions.getProducts(data)), 
  addProducts:(data) => dispatch(actions.addProducts(data)), 
}
}
export default connect(mapToStateProps , mapDispatchToProps)(Product);