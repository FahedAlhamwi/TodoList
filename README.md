# TodoList Project
In this project we need an input and an add button, which simply will add a new inputs with an update buttons with options to delete edit and complete it.<br/>
so we have to create three components (todo, todo form , todo list) and nesting them in the app.

# Todo
It is the item or the task so we use all properties on it in the function props (adding items , complete ,update , remove) then with useState hook we set a value which can be edit in submitUpdate.<br/>
and because it is not a single input - inputs will add after clicking the button - we have to put them in a map as we are going to creat a list component too.<br/>
so in the return of the todos map we return all the properties above pluse the todoForm with edit option.

# TodoForm
Its the shape of what will happen in the project or how it have to happen so we will use the useState hook to let the value be the editing one or set it to empty input .<br/>
withe the useRef and useEffect the pointer will focous on the input to let us add task without using mouse or click.<br/>
then with using two methods handleChange (to setInput value onChange) and handleSubmit (to leave the value tdehe same as default then changing properties of it after submitting)<br/> we have to return the methods like if we submit the option of updating the item will show or else its stays as default .

# TodoList <br/>
It is the todo list so we use the hook useState with an array .<br/>
addTodo:<br/>
If the todo value (text) is text (not empty) add todo input with the same value as a new todos (this is going to be with a lot of todo items not only one)<br/>
updateTodo:<br/>
If the new value is updating set the value to a new one otherwise keep the value (text) like it is in item (text after adding before updating)<br/>
RemoveTodo:<br/>
if onclick (it is in Todo component) remove the item (the inout)<br/>
CompleteTodo:<br/>
If onclick (in todo component) mark it or change it to isComplete position<br/>
then we return the header with nesting both components with props and methods.





