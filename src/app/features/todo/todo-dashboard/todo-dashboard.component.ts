import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../share/model/todo.model';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoService } from '../../../share/service/todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

  private todos: Todo[];
  private activeTasks;
  private newTodo;
  private path;


  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getTodos(this.path);
    });
  }

  getTodos(query = '') {
    return this.todoService.get(query).then(todos => {
      this.todos = <Todo[]>todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
       console.log(this.todos);
    });

  }

  addTodo( todo ) {
    this.todoService.add(todo).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = ''; // clear input form value
    });
    if ( this.path !== 'all') {
      this.router.navigate(['/todo']);
    }
  }

  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }

  onRemoveTodo(todo) {
    this.todoService.delete(todo.id).then(() => {
      return this.getTodos();
    });
  }

  clearCompleted() {
    this.todoService.deleteCompleted().then(() => {
      return this.getTodos();
    });
  }
  onToggleTodoComplete (todo) {
    todo.isDone = !todo.isDone;
    this.todoService.put(todo).then( () => {
      return this.getTodos();
    });
  }

  updateTodoVal (todoValue) {
    this.updateTodo(todoValue.todo, todoValue.value);
  }
}
