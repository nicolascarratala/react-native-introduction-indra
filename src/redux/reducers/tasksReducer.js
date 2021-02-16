var intialState = {
    tasks:['nada']
}

const TasksReducer = ( state = intialState, action) => {
    switch( action.type ){
        case "ADD_TASK":
            return tasks 
        case "REMOVE_TASK"
    }
}

export default TasksReducer;