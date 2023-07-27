import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, delay, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TodoActions from 'src/app/todo-app/store/actions/todo-app.actions';
import { dummyTodos } from 'src/app/todo-app/store/models/todo.model';

@Injectable()
export class TodoEffects {

    constructor(private actions$: Actions) { }

    loadTrackers$ = createEffect(() => {
        return this.actions$.pipe(

            ofType(TodoActions.loadTodos),

            concatMap(() =>
                of(dummyTodos).pipe(
                    delay(Math.random() * 2000),
                    map(data => TodoActions.loadTodoSuccess({ data }))
                )
            )

        );
    });
}