import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterValue = 100;

  constructor() { }

  public get counter(): number { return this.counterValue; }

  public increment(incrementAmount: number): void { this.counterValue += incrementAmount; }
}
