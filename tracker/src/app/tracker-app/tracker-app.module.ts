import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitsFormComponent } from './components/habits-form/habits-form.component';
import { HabitsListComponent } from './components/habits-list/habits-list.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TrackerEffects } from './store/effects/tracker.effects';
import * as trackerReducer from './store/reducers/tracker.reducer';

const routes: Route[] = [
  {
    path: '',
    component: HabitsListComponent
  },
  {
    path: 'add',
    component: HabitsFormComponent
  }];

@NgModule({
  declarations: [
    HabitsFormComponent,
    HabitsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('tracker', trackerReducer.reducer),
    EffectsModule.forFeature([TrackerEffects]),
  ]
})
export class TrackerAppModule { }
