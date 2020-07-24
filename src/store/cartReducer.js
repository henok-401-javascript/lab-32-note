const initState = {
  count:0,
}

const reducer = (state = initState,action) =>{
  let newState = {...state}

  switch(action.type){
    case 'ADD_TO_CART':
      newState.count.push(action.payload);
      newState.count++;
      break;
      default:
  }
  return newState;
}
export default reducer;