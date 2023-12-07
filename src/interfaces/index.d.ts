export interface TodosProps {
  todos:{
    id:string,
    title:string,
    completed:boolean
  }[],
  handleRemove: (id:string)=>void,
  handleCompleted: ({id,completed}:{id:string,completed:boolean}) => void 
}

export interface TodoProps {
  id:string,
  title:string,
  completed:boolean,
  handleRemove: (id:string)=>void,
  handleCompleted: ({id,completed}:{id:string,completed:boolean}) => void 
}