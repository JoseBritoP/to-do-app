import { useState } from "react";
import { mockTodos } from "./constants";
import Todos from "./components/shared/Todos";

export default function App() {

  const [todos] = useState(mockTodos)
  return (
    <div>
      <Todos todos={todos}/>
    </div>
  )
}
