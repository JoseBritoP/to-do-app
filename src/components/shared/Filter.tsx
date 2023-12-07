import { 
  // TODO_FILTERS,
  FILTERS_BUTTONS, FilterValue } from '../../constants'

// export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS] //Cualquier key del objeto Todo_Filters

interface FilterProps {
  filterSelect: FilterValue,
  onFilterChange: (filter:FilterValue) => void
}



export default function Filter({filterSelect,onFilterChange}:FilterProps) {
  
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key,{href,literal}])=> {

          const isSelect = key === filterSelect;
          const className = isSelect ? 'selected' : ''
          return (
            <li key={key}>
              <a href={href} className={className}
                onClick={(event)=>{
                  event.preventDefault();
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
      
    </ul>
  )
}
