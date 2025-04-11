import { useReducer } from "react"
import Form from "./components/Form"
import ListTasks from "./components/ListTasks"
import { initialState, taskReducer } from "./useReducer/taskReducer"

function App() {

  const [stateTasks, dispatch] = useReducer(taskReducer, initialState)

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="py-15 flex justify-center items-center gap-1">
          <h1 className="text-3xl md:text-4xl font-bold">ToDo <span className="text-green-600">List</span></h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="50" height="50" strokeWidth="2">
            <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
            <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
            <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
            <path d="M11 6l9 0"></path>
            <path d="M11 12l9 0"></path>
            <path d="M11 18l9 0"></path>
          </svg>
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
