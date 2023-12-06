export interface TodosProps {
  todos:{
    id:number,
    title:string,
    completed:boolean
  }[]
}

export interface TodoProps {
  id:number,
  title:string,
  completed:boolean
}