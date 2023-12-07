import { Todos, Footer,Header } from './components/shared/index'
import { useTodos } from "./hooks/useTodoHook";

export default function App() {

  const { filterSelected, activeCount, completedCount, filteredTodos, handleFilterChange, handleRemove, handleRemoveAllCompleted, handleCompleted, handleAddTodo } = useTodos();
  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos 
        todos={filteredTodos} 
        handleRemove ={handleRemove} 
        handleCompleted = {handleCompleted}
      />
      <Footer 
        activeCount={activeCount} 
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        filterSelected={filterSelected} 
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}
