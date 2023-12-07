import { TodosProps } from "../../interfaces"
import TodoCard from "./TodoCard"

export default function Todos({todos,handleRemove,handleCompleted}:TodosProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo)=>(
        <li key={todo.id} className={`${todo.completed ? 'completed' : '' }`}>
          <TodoCard 
            key={todo.id} 
            id={todo.id} 
            title={todo.title} 
            completed={todo.completed} 
            handleRemove={handleRemove}
            handleCompleted={handleCompleted}
          />
        </li>
      ))}
    </ul>
  )
}
