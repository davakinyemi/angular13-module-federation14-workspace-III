import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/todo-app/store/models/todo.model';

export const enum TodoFilter {
  All = 'all',
  Completed = 'completed',
  Active = 'active'
}

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: TodoFilter): Todo[] {
    return (todos || []).filter(t => {
      if (filter === TodoFilter.All) {
        return true;
      }
      if (filter === TodoFilter.Active && !t.completed) {
        return true;
      }
      if (filter === TodoFilter.Completed && t.completed) {
        return true;
      }
      return false;
    });
  }

}
