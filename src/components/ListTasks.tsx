import { Task } from "../types/types"
import { TaskActions } from "../useReducer/taskReducer"
import { IconCheck, IconEdit, IconTrash } from "@tabler/icons-react"


type ListTasksProps = {
  tasks: Task[]
  dispatch: React.ActionDispatch<[action: TaskActions]>
}

export default function ListTasks({ tasks, dispatch }: ListTasksProps) {


  return (
    <>

      <h2 className="text-center text-3xl font-semibold text-green-700">{`${tasks.length ? `Tus Tareas` : `No Hay Tareas`}`}</h2>
      {tasks.map(function (task) {
        return (
          <div key={task.id} className="bg-gray-300 rounded-2xl p-5 flex justify-between items-center my-5 overflow-auto break-words">

            <div>
              <p className={`text-xl font-semibold`}>{task.taskToDo}</p>
            </div>

            <div className="flex justify-center items-center gap-5 md:gap-10 ">
              <button className="cursor-pointer">
                <IconCheck className="text-green-600 hover:text-green-400"/>
              </button>

              <button className="cursor-pointer" onClick={() => dispatch({ type: "edit-task", payload: { id: task.id } })}>
                <IconEdit stroke={2} className="text-orange-600 hover:text-orange-500" />
              </button>
              <button className="cursor-pointer">
                <IconTrash className="text-red-700 hover:text-red-500" />
              </button>
            </div>

          </div>
        )
      })}


    </>
  )
}
