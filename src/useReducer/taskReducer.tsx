import { Task } from "../types/types"

export type TaskActions =

    { type: "add-task", payload: { newTask: Task } } |
    { type: "edit-task", payload: { id: Task["id"] } } 

export type InitialStateType = {
    tasks: Task[]
    id: Task["id"]
}

export const initialState = {
    tasks: [],
    id: ""
}


export function taskReducer(state: InitialStateType = initialState, action: TaskActions) {

    if (action.type == "add-task") {

        let  taskUpdates: Task[] = [];

        if (state.id) {
            taskUpdates = state.tasks.map(function (task) {
                if (task.id == state.id) {
                    return action.payload.newTask
                }else{
                    return task
                }
            })
            
        }else{
            taskUpdates = [...state.tasks, action.payload.newTask]
        }
        
        return {
            ...state, tasks:taskUpdates, id: ""
        }
    }

    if (action.type == "edit-task") {

        return {
            ...state, id: action.payload.id
        }

        }


    return state

}