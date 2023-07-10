const gibsonReducer = (state = 5, action) =>{
    switch(action.type){
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        if(action.payload === 'gibson')
          return state -1;
      default: 
        return state;  
      } 
  }

  export default gibsonReducer;