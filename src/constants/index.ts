export const mockTodos = [
  {
    id:1,
    title:'todo 1',
    completed:false
  },
  {
    id:2,
    title:'todo 2',
    completed:true
  },
  {
    id:3,
    title:'todo 3',
    completed:false
  },
  {
    id:4,
    title:'todo 4',
    completed:true
  },
  {
    id:5,
    title:'todo 5',
    completed:false
  },
  {
    id:6,
    title:'todo 6',
    completed:true
  },
  {
    id:7,
    title:'todo 7',
    completed:false
  },
];

export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE:'active',
  COMPLETED:'completed'
} as const;

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL] : {
    literal:'Todos',
    href:`/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE] : {
    literal:'Activos',
    href:`/?filters=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED] : {
    literal:'Completados',
    href:`/?filters=${TODO_FILTERS.COMPLETED}`
  }
} as const;

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS] //Cualquier key del objeto Todo_Filters
