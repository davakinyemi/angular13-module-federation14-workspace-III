import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { TooltipDirective } from './components/todo/directives/tooltip/tooltip.directive';
import { TodosFilterPipe } from './components/todos/pipes/todos-filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as TodosReducer from 'src/app/todo-app/store/reducers/todo-app.reducer';
import { TodoEffects } from 'src/app/todo-app/store/effects/todo-app-effects';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TooltipDirective,
    TodosFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todos', TodosReducer.reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoAppModule { }
