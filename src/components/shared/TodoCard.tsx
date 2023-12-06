import { TodoProps } from "../../interfaces";

export default function TodoCard({id,title,completed}:TodoProps) {
  return (
    <div className="view">
      <input type="checkbox" className="togle" checked={completed} onChange={()=>{}} />
      <label htmlFor="">{title}</label>
      <button className="destroy" onClick={()=>{}}></button>
    </div>
  )
}
