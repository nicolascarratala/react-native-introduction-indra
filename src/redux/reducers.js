const initialState = {
    tasks : [
        {
            id: 1,
            tarea: 'Hello World',
        }
    ],
 }
 
const Reducers = (state = initialState, action) => {
     switch(action.type){
         case "ADD_TASK":
             return {
             ...state,
             tasks: action.payload
            }
         default:
             return state;
     }
}
export default Reducers;