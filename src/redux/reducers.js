const initialState = {
    tasks : [
        {
            id: '1',
            title: 'Hello World',
        }
    ],
 }
 
const Reducers = (state = initialState, action) => {
     switch(action.type){
         case "ADD_TASK":
             return {
             ...state,
             tasks: [...state.tasks, action.payload]}
         default:
             return state;
     }
}
export default Reducers;