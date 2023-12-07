import { useState } from "react";
import { mockTodos } from "./constants";
import Todos from "./components/shared/Todos";

export default function App() {

  const [todos,setTodos] = useState(mockTodos);

  const handleRemove = (id:number)=>{
    const newTodos = todos.filter(todo=>todo.id !== id);
    setTodos(newTodos)
  };

  const handleCompleted = ({id,completed}:{id:number,completed:boolean}) => {
    const newTodos = todos.map((todo)=>{
      if(todo.id === id){
        return {
          ...todo,completed
        }
      }
      return todo
    });

    setTodos(newTodos);
  };
  return (
    <div className="todoapp">
      <Todos todos={todos} handleRemove ={handleRemove} handleCompleted = {handleCompleted}/>
    </div>
  )
}
