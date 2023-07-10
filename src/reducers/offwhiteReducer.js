const offwhiteReducer = (state = 20, action) =>{
    switch(action.type){
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        if(action.payload === 'off')
          return state -1;
      default: 
        return state;  
      } 
  }

  export default offwhiteReducer;