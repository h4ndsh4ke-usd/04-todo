// import { Todo } from ".";
import { Todo } from "./todo.class"

export class TodoList{



    constructor(){
        
        // this.todos = [];
        this.cargarLocalStoragge();

        
    }

    nuevoTodo( todo ){

        this.todos.push( todo );
        this.guardarLocalStoragge();

    }

    eliminarTodo( id ){

        this.todos = this.todos.filter(  todo => todo.id != id  );
        this.guardarLocalStoragge();
        
    }

    marcarCompletado( id ){

        for( const todo of this.todos ){
            if( todo.id == id ){
                
                todo.completado = !todo.completado;
                break;

            }
        }

        this.guardarLocalStoragge();


    }

    eliminarCompletados(){

        this.todos = this.todos.filter(  todo => !todo.completado  );
        this.guardarLocalStoragge();

    }

    guardarLocalStoragge(){

        localStorage.setItem('todo', JSON.stringify( this.todos ));
    }

    cargarLocalStoragge(){

        // if( localStorage.getItem('todo')){

        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        // }  else {
        //     this.todos = [];
        // }

        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];

        this.todos = this.todos.map( obj => Todo.fromJson( obj ) );

    }

    

}