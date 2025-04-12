import { useEffect, useState } from "react"
import { Task } from "../types/types"
import { v4 as uuid } from "uuid"
import { InitialStateType, TaskActions } from "../useReducer/taskReducer"


type FormProps = {
    dispatch:  React.ActionDispatch<[action: TaskActions]>
    stateTasks: InitialStateType
}

export default function Form({dispatch, stateTasks}: FormProps) {

    const [task, setTask] = useState<Task>({
        id: uuid(),
        taskToDo: "",
        isComplete: false
    })

    useEffect(() => {
        if (stateTasks.id) {
            const filterEdit = stateTasks.tasks.filter(task => task.id == stateTasks.id)[0];
            setTask(filterEdit);
        }
    },[stateTasks.id])

    

    function hanldeChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTask({...task, [e.target.id] : e.target.value})
    }

    function handleSubmit(e:  React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch({ type: "add-task", payload: { newTask: task } })
        setTask({
            id: uuid(),
            taskToDo: "",
            isComplete: false
        })
    }

    function validateForm() {
        const {taskToDo} = task;
        if (taskToDo.trim() == "") {
            return true
        }else{
            return false
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-between items-center gap-1'>
                    <div className='w-full'>
                        <input className="p-3 bg-gray-300 rounded-2xl w-full" type="text" placeholder="Agrega tus tareas aqui..." id="taskToDo" value={task.taskToDo} onChange={hanldeChange} />
                    </div>

                    <div className="">
                        <input className="bg-green-600 cursor-pointer hover:bg-green-500 text-white rounded-full h-10 w-10  font-semibold text-2xl pb-0.5 disabled:bg-green-300 disabled:cursor-not-allowed " type="submit" value={"+"} disabled={validateForm()} />
                    </div>
                </div>
            </form>
        </>
    )
}
