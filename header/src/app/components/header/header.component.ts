import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input()
  title: string = 'Task App';

  @Input()
  todosCount!: number;

  @Input()
  trackersCount!: number;

  $eventBus?: Subscription;

  constructor(public authService: AuthService) {
    // console.log(`TOKEN: ${localStorage.getItem('token')}`)
  }

  onEventHandler(e: CustomEvent) {
    if (e.detail.eventType === 'auth-confirm') {
      this.authService.isLogged = Boolean(localStorage.getItem('token'));
    }
  }

  ngOnInit(): void {
    this.authService.isLogged = Boolean(localStorage.getItem('token'));
    this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-bus').subscribe((e: any) => this.onEventHandler(e));
  }

  ngOnDestroy() {
    this.$eventBus?.unsubscribe();
  }

}
