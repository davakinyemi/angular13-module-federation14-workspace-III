import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todo-app/store/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export abstract class TodoAppService {
  getAll(): Promise<Todo[]> {
    throw new Error('Not implemented');
  }
  createTodo(todo: Partial<Todo>): Promise<Todo> {
    throw new Error('Not implemented');
  }
  updateTodo(todo: Todo): Promise<void> {
    throw new Error('Not implemented');
  }
  deleteTodo({ id }: { id: string }): Promise<void> {
    throw new Error('Not implemented');
  }
}