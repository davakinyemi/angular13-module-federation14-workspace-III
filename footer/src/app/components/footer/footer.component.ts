import { Component, OnInit } from '@angular/core';
import { CounterService, EventbusService } from 'components-lib';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public counterService: CounterService, private eventbusService: EventbusService) { }

  ngOnInit(): void {
  }

  incrementCounter() {
    this.counterService.increment(100);
  }

  sendEvent() {
    this.eventbusService.emitEvent('notification', 'Hello!');
  }

}
