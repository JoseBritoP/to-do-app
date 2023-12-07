import { useState } from "react";
import { FilterValue, TODO_FILTERS,mockTodos } from "../constants";

export const useTodos = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter);
  };

  const handleRemove = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleCompleted = ({ id, completed }: { id: string; completed: boolean }) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
    setTodos(newTodos);
  };

  const handleAddTodo = (title: string): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return {
    todos,
    filterSelected,
    activeCount,
    completedCount,
    filteredTodos,
    handleFilterChange,
    handleRemove,
    handleRemoveAllCompleted,
    handleCompleted,
    handleAddTodo,
  };
};
