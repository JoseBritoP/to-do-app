import React,{ useState } from 'react'

export interface CreateTodoProps {
  saveTodo:(title:string)=> void
}

export default function CreateTodo({saveTodo}:CreateTodoProps) {

  const [inputValue,setInputValue] = useState('');

  const handlesubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveTodo(inputValue)
    setInputValue('')
  };
  return (
    <form onSubmit={handlesubmit}>
      <input type="text" value={inputValue} className='new-todo' onChange={(e)=>setInputValue(e.target.value)} placeholder='What you want to do?' autoFocus/>
    </form>
  )
}
