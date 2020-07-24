

const initState = {
  currentCategory : 'Electronics',
   categoryList :[],
}

const reducer = (state = initState , action) =>{

  let newState = {...state};

  switch(action.type){
    case 'CHANGE-CATEGORY':
      newState.categoryList = action.payload;
      break;
    case 'RUN_CATEGORY':
          newState.currentCategory = action.payload;
          break;

    case 'ADD_CATEGORY':
      newState.categoryList.push(action.payload);
      break;

    default:
      break;
    

  }

  return newState;
}

export default reducer;