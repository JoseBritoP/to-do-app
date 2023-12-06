import { TodosProps } from "../../interfaces"
import TodoCard from "./TodoCard"

export default function Todos({todos,handleRemove}:TodosProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo)=>(
        <li key={todo.id} className={`${todo.completed ? 'completed' : '' }`}>
          <TodoCard key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} handleRemove={handleRemove}/>
        </li>
      ))}
    </ul>
  )
}
