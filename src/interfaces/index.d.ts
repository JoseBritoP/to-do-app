export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS] //Cualquier key del objeto Todo_Filters

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

export interface FilterProps {
  filterSelect: FilterValue,
  onFilterChange: (filter:FilterValue) => void
}

export interface CreateTodoProps {
  saveTodo:(title:string)=> void
}

export interface FooterProps {
  activeCount:number,
  completedCount:number,
  filterSelected: FilterValue,
  handleFilterChange: (filter:FilterValue) => void,
  onClearCompleted: ()=> void
}

export interface HeaderProps {
  onAddTodo:(title:string)=> void
}