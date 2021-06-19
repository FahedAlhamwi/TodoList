import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
// Create a function using hook as an array for the list 
function TodoList() {
    const [todos, setTodos] = useState([]);
    //First is adding method which is giving a new input
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    };
    //Update method to allow you to update the input to a new value
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    };
    // Remove method to allow you to remove the input 
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }
    // Changing the apperance of the input when you push it to show its complete
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
        <div>
            <h1>What wife wants today!</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            
        </div>
    )
}

export default TodoList
