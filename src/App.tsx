import { useState } from "react";
import { mockTodos } from "./constants";
import Todos from "./components/shared/Todos";

export default function App() {

  const [todos,setTodos] = useState(mockTodos);

  const handleRemove = (id:number)=>{
    const newTodos = todos.filter(todo=>todo.id !== id);
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Todos todos={todos} handleRemove ={handleRemove}/>
    </div>
  )
}
