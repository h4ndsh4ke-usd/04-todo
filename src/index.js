
// Primero importamos los estilos.
import './styles.css';

// Usamos un archivo de index para realizar todas nuestras importaciones de classes!
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo  => crearTodoHtml( todo ));