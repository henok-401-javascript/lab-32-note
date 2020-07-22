

const initState = {
  currentCategory : '',
   categoryList :[],
}

const reducer = (state = initState , action) =>{

  let newState = {...state};
console.log('new place',newState);
  switch(action.type){
    case 'CHANGE-CATEGORY':
      newState.categoryList = action.payload;
      break;
      default:
  }

  return newState;
}

export default reducer;