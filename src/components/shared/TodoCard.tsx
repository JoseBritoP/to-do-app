import { TodoProps } from "../../interfaces";

export default function TodoCard({id,title,completed,handleRemove}:TodoProps) {
  return (
    <div className="view">
      <input type="checkbox" className="toggle" checked={completed} onChange={()=>{}} />
      <label htmlFor="">{title}</label>
      <button className="destroy" onClick={()=>handleRemove(id)}></button>
    </div>
  )
}
