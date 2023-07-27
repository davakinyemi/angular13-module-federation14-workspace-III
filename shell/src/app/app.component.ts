import { Component } from '@angular/core';
import { EventbusService } from 'components-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor(private eventbusService: EventbusService) { }

  ngOnInit() {
    this.eventbusService.initializeEventBus();
  }
}
