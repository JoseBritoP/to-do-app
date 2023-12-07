/* eslint-disable @typescript-eslint/no-unused-vars */
import Filter from './Filter'
import { FilterValue } from '../../constants'

interface FooterProps {
  activeCount:number,
  completedCount:number,
  filterSelected: FilterValue,
  handleFilterChange: (filter:FilterValue) => void,
  onClearCompleted: ()=> void
}

export default function Footer({activeCount,completedCount,onClearCompleted,filterSelected,handleFilterChange}:FooterProps) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> items left
      </span>
      <Filter filterSelect = {filterSelected} onFilterChange = {handleFilterChange}/>
    </footer>
  )
}
