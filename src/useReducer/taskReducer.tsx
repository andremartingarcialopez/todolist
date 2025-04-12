import { Task } from "../types/types"

export type TaskActions =

    { type: "add-task", payload: { newTask: Task } } |
    { type: "edit-task", payload: { id: Task["id"] } } |
    { type: "delete-task", payload: { id: Task["id"] } } |
    { type: "check-task", payload: { id: Task["id"] } }

export type InitialStateType = {
    tasks: Task[]
    id: Task["id"]
}

function getLocalStorage() {
    const taskLocal = localStorage.getItem("tasks");
    return taskLocal ? JSON.parse(taskLocal) : []
}

export const initialState = {
    tasks: getLocalStorage(),
    id: ""
}


export function taskReducer(state: InitialStateType = initialState, action: TaskActions) {

    if (action.type == "add-task") {

        let taskUpdates: Task[] = [];

        if (state.id) {
            taskUpdates = state.tasks.map(function (task) {
                if (task.id == state.id) {
                    return action.payload.newTask
                } else {
                    return task
                }
            })

        } else {
            taskUpdates = [...state.tasks, action.payload.newTask]
        }

        return {
            ...state, tasks: taskUpdates, id: ""
        }
    }

    if (action.type == "edit-task") {

        return {
            ...state, id: action.payload.id
        }

    }

    if (action.type == "delete-task") {

        console.log("Hola")
        console.log(action.payload.id)
        const taskDelete = state.tasks.filter(task => task.id !== action.payload.id);

        return {
            ...state, tasks: taskDelete
        }
    }

    if (action.type === "check-task") {
        const updatedTasks = state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return { ...task, isComplete: !task.isComplete }; // alterna el valor
          }
          return task;
        });
      
        return {
          ...state,
          tasks: updatedTasks,
        };
      }


    return state

}