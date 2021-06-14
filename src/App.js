import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Redux Todo App</h1>
        </header>
        <div className="todo-card">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
