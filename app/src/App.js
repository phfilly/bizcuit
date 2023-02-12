import './App.css'
import { useState } from "react"

const App = () => {
  const [todo, setTodo] = useState("")
  const [deadline, setDeadline] = useState("")
  const [todoList, setTodoList] = useState([])

  return (
    <div className="wrapper">
      TODO APP
    </div>
  )
}

export default App
