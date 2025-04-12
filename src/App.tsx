import { useReducer } from "react"
import Form from "./components/Form"
import ListTasks from "./components/ListTasks"
import { initialState, taskReducer } from "./useReducer/taskReducer"
import { IconListCheck } from "@tabler/icons-react"

function App() {

  const [stateTasks, dispatch] = useReducer(taskReducer, initialState)

  localStorage.setItem("tasks", JSON.stringify(stateTasks.tasks))



  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className=" pt-5 md:pt-15 flex justify-center items-center gap-1">
          <h1 className="text-3xl md:text-4xl font-bold">ToDo <span className="text-green-600">List</span></h1>
          <IconListCheck className="text-green-600 w-15 h-15"/>
        </div>
      </div>

      <section className="mx-auto max-w-4xl my-10 px-5">
       <Form
       dispatch = {dispatch}
       stateTasks={stateTasks}
       />
      </section>

      <section className="mx-auto max-w-4xl my-10 px-5">
        <ListTasks
        tasks={stateTasks.tasks}
        dispatch ={dispatch}
        />
      </section>
    </>
  )
}

export default App
