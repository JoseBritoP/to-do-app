export interface TodosProps {
  todos:{
    id:number,
    title:string,
    completed:boolean
  }[],
  handleRemove: (id:number)=>void
}

export interface TodoProps {
  id:number,
  title:string,
  completed:boolean,
  handleRemove: (id:number)=>void
}