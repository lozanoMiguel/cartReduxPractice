const stanleyReducer = (state = 50, action) =>{
    switch(action.type){
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        if(action.payload === 'stanley')
          return state -1;
      default: 
        return state;  
      } 
  }

  export default stanleyReducer;