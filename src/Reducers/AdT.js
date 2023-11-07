const initialState = {
    tasks:[]
}
const AdT = (state= initialState,action)=>{
switch(action.type){
    case 'ADD_TASK':
        return{
            ...state,
            tasks:[...state.tasks, action.payload]
        }
        case 'DELETE_TASK':
            const taskId = action.payload;
            return {
              ...state,
              tasks: state.tasks.filter((task) => task.id !== taskId),
            };
            case 'TOGGLE_COMPLETE':
                return {
                  ...state,
                  tasks: state.tasks.map((task) => {
                    if (task.id === action.payload) {
                      return {
                        ...task,
                        isComplete: !task.isComplete,
                      };
                    }
                    return task;
                  }),
                };
              default:
                return state;
            }
          };
export default AdT