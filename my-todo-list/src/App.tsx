import React, { useEffect, useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import Mynavbar from './components/Mynavbar';
import TaskItem, { newTodoObjectProps } from './components/TaskItem'

<<<<<<< Updated upstream
type newTodoObjectProps = {
    id: number
    text: string
    completed?: boolean
}

const updateLocalStorage = (todos: newTodoObjectProps[]) =>
    localStorage.setItem("locStorTodos", JSON.stringify(todos));

=======
const updateLocalStorage = (todos: newTodoObjectProps[]) => localStorage.setItem("locStorTodos", JSON.stringify(todos));
>>>>>>> Stashed changes

function App() {

  const [todos, setTodos] = useState<newTodoObjectProps[]>([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [todoEditingId, setTodoEditingId] = useState<number>();
  const [editingText, setEditingText] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault()
    if (!currentTodo) {
      alert("Please fill in the task!!!");
      return
    }

    const newTodoEntry = {
      id: new Date().getTime(),
      text: currentTodo,
      completed: false
    }

    const newTodo = [...todos, newTodoEntry]
    setTodos(newTodo)
    setCurrentTodo("")
    setTodoEditingId(undefined)
    updateLocalStorage(newTodo)
  }

  function deleteTodo(id: number) {
    const upDatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(upDatedTodos)
    updateLocalStorage(upDatedTodos)
  }

  function editTodo(id: number) {
<<<<<<< Updated upstream

    const itemToEdit = todos.findIndex((todo) => todo.id === id)
    if(itemToEdit === -1) return

    todos[itemToEdit].text = editingText

    const newTodos = [...todos]

    setTodos(newTodos)
    updateLocalStorage(newTodos)
=======
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo
    })

    setTodos(updatedTodos)
    updateLocalStorage(updatedTodos)
>>>>>>> Stashed changes
    setTodoEditingId(0)
  }

  useEffect(() => {
    const storagedTodos = localStorage.getItem("locStorTodos")
<<<<<<< Updated upstream
    if(!storagedTodos) return
=======
    if (!storagedTodos) return
>>>>>>> Stashed changes

    const storagedIntoArray = JSON.parse(storagedTodos)
    if (storagedIntoArray) setTodos(storagedIntoArray);
  }, [])

  return (
    <>
      <Mynavbar />
      <main>
        <AddTaskForm onHandleSubmit={handleSubmit} setInputValue={setCurrentTodo} inputValue={currentTodo} />
        <section className="task-list">
          <h2>--- Task List ---</h2>
          <TaskItem todos={todos} todoEditingId={todoEditingId} setEditingText={setEditingText} editingText={editingText} editTodo={editTodo} deleteTodo={deleteTodo} setTodoEditingId={setTodoEditingId} />
        </section>
      </main>
    </>
  )
}

export default App
