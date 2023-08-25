
import './App.css';

// components
import Header from './components/Header.js';
import TodoForm from './components/TodoForm.js';
import Todos from './components/Todos.js';

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
