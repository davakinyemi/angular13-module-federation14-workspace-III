import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {

  @Input()
  todo: any;

  @Output()
  update = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  editMode: boolean = false;

  toggle(): void {
    this.update.emit({ ...this.todo, completed: !this.todo.completed });
  }

  completeEdit($event: any): void {
    this.todo.label = $event.target?.value;
    this.editMode = false;
    this.update.emit(this.todo);
  }

  enableEditMode(): void {
    this.editMode = false;
  }

}
