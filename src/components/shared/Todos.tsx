import { TodosProps } from "../../interfaces"
import TodoCard from "./TodoCard"

export default function Todos({todos}:TodosProps) {
  return (
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <TodoCard key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>
        </li>
      ))}
    </ul>
  )
}
