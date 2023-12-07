export interface TodosProps {
  todos:{
    id:number,
    title:string,
    completed:boolean
  }[],
  handleRemove: (id:number)=>void,
  handleCompleted: ({id,completed}:{id:number,completed:boolean}) => void 
}

export interface TodoProps {
  id:number,
  title:string,
  completed:boolean,
  handleRemove: (id:number)=>void,
  handleCompleted: ({id,completed}:{id:number,completed:boolean}) => void 
}