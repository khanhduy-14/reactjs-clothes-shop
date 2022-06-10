const initialState = {
    data: [],
    loading: false,
    error: undefined
  }
  
  function trendReducer(state = initialState, action){
    switch (action.type) {
      
      case 'trend/fetch_request':
        return {
          ...state,
          loading: true
        }
  
      case 'trend/fetch_success':
        return {
          ...state,
          loading: false,
          data: action.payload
        }
  
      case 'trend/fetch_error':
        return {
          ...state,
          loading: false,
          error: action.payload
        }
    
     
      default:
        return state;
    }  
  }
  
  export default trendReducer;