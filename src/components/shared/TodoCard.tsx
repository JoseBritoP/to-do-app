import { TodoProps } from "../../interfaces";

export default function TodoCard({id,title,completed,handleRemove,handleCompleted}:TodoProps) {
  return (
    <div className="view">
      <input type="checkbox" className="toggle" checked={completed} onChange={(event)=>{handleCompleted({id,completed:event.target.checked})}} />
      <label htmlFor="">{title}</label>
      <button className="destroy" onClick={()=>handleRemove(id)}></button>
    </div>
  )
}
