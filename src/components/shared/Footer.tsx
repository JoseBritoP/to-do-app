/* eslint-disable @typescript-eslint/no-unused-vars */
import Filter from './Filter'
import { FooterProps } from '../../interfaces'

export default function Footer({activeCount,completedCount,onClearCompleted,filterSelected,handleFilterChange}:FooterProps) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> items left
      </span>
      <Filter filterSelect = {filterSelected} onFilterChange = {handleFilterChange}/>
      {
        completedCount > 0 && 
        (
          <button className='clear-completed' onClick={onClearCompleted}> Delete completed
          </button>
        )
      }
    </footer>
  )
}
