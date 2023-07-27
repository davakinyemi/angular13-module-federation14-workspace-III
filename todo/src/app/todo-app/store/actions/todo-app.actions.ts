import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todo-app/store/models/todo.model';

export const loadTodos = createAction(
    '[Todos] LOAD TODOS'
);

export const loadTodoSuccess = createAction(
    '[Todos] LOAD TODOS SUCCESS',
    props<{ data: any }>()
);

export const loadTodoFailure = createAction(
    '[Todos] LOAD TODOS FAILURE',
    props<{ error: any }>()
);

export const deleteTodo = createAction(
    '[Todos] DELETE TODO',
    props<{ todo: Todo }>()
);

export const updateTodo = createAction(
    '[Todos] UPDATE TODO',
    props<{ todo: Todo }>()
);

export const clearCompleted = createAction(
    '[Todos] CLEAR COMPLETED TODOS'
);

export const addTodo = createAction(
    '[Todos] ADD TODOS',
    props<{ todo: Todo }>()
);