import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Todo } from '../../../share/model/todo.model';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  onclearCompleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clearCompleted = () => {
    this.onclearCompleted.emit(true);
  }

}
