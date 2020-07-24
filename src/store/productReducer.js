const initState = {
  allProducts : [],
}

const reducer = (state = initState , action) =>{
  let newState = {...state}
console.log('new state' , newState);
switch(action.type){
  case 'GET_PRODUCTS':
  newState.allProducts = action.payload;
   break;

   case 'ADD_PRODUCTS':
     newState.allProducts.push(action.payload);
     break;

  default:
  break;
}

  return newState;
}

export default reducer;