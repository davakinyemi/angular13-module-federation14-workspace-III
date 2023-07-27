import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from 'src/app/todo-app/store/reducers/todo-app.reducer';

export const selectTodosState = createFeatureSelector<fromTodos.State>(fromTodos.todosFeatureKey);

export const selectTodos = createSelector(selectTodosState, (state) => state.todos);

export const selectPendingTodosCount = createSelector(selectTodos, (state) => state.length);