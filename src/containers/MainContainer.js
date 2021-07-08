import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';
import TodoList from '../components/TodoList';
import React, {useState} from "react";

function MainContainer() {
    const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
        return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos);
  };
  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  }
  const completeTodo = id => {
    let updateedTodos = todos.map(todo => {
        if (todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos(updateedTodos);
  }
  return (
    <div className="todo-app">
     <TodoList />
     <TodoForm onSubmit={addTodo}/>
     <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
}



export default MainContainer
