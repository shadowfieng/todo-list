import "./App.css";
import { AddTodoMenu } from "./components/AddTodoMenu";
import { TodoItem } from "./components/TodoItem";

const mockTodos = [
  {
    id: 1,
    description: "test 1",
    isDone: false,
  },
  {
    id: 2,
    description: "test 2",
    isDone: false,
  },
  {
    id: 3,
    description: "test 3",
    isDone: false,
  },
];

/* 
  1. Написать коллбек функцию, которая будет срабатывать при изменении чекбокса у элемента todo-list'a и изменять исходный стейт тудушек.
  
  Пример: 
  function markTodo(id) {
    По айдишке найти элемент в исходном массиве, произвести изменения и обновить стейт с новым значением. (hint: findIndex)
  }


  2. Написать функцию, которая будет срабатывать при удалении элемента списка todo-list'a
  (hint: filter по id)


  3. Модифицировать AddTodoMenu, чтобы можно было создавать todo-item при клике на Add (hint: понадобиться обновлять исходный стейт, соответственно нужно будет написать колбек функцию, которая вызовется ниже в AddTodoMenu и то, что мы передадим в нее аргументом ниже сможем использовать здесь, на уровне где мы изменяем стейт)

*/

function App() {
  return (
    <div className="App">
      <h1>Todo app</h1>

      <div className="container">
        <AddTodoMenu /> 
        <ul className="todo-list">
          {mockTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
