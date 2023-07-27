import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CounterService } from 'components-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }

  incrementCounter() {
    this.counterService.increment(100);
  }

}
