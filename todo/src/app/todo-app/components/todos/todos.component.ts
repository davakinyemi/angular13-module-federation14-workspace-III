import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../store/models/todo.model';
import * as TodosSelector from 'src/app/todo-app/store/selectors/todo-app.selectors';
import * as TodosActions from 'src/app/todo-app/store/actions/todo-app.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos$: Observable<Todo[]>;
  pendingTodosCount$: Observable<number>;

  @Output()
  update = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  @Output()
  add = new EventEmitter();

  constructor(private store: Store) {
    this.store.dispatch(TodosActions.loadTodos());
    this.todos$ = this.store.select(TodosSelector.selectTodos);
    this.pendingTodosCount$ = this.store.select(TodosSelector.selectPendingTodosCount);
  }

  clearCompleted(): void {
    this.store.dispatch(TodosActions.clearCompleted());
  }

  addTodo(input: HTMLInputElement): void {
    const todo: Todo = {
      completed: false,
      label: input.value,
      id: Math.random().toString()
    };

    this.store.dispatch(TodosActions.addTodo({ todo }));
    input.value = '';
  }

  onChange(todo: Todo): void {
    this.store.dispatch(TodosActions.updateTodo({ todo }));
  }

  onDelete(todo: Todo): void {
    this.store.dispatch(TodosActions.deleteTodo({ todo }));
  }

}
