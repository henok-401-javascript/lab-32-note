import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {connect} from 'react-redux';

function Header(props){

  return(
    <div>
  <AppBar position="static"> 
  <h1>Henok's Store</h1>
  <p>cart = {props.count}</p>
  </AppBar>
    </div>
  )
}
const mapToStateProps = (state) =>{
  return{
    count:state.count,
  }
}

export default connect(mapToStateProps)(Header);