import { Injectable } from '@angular/core';
import { EventWindow } from './event-window';
import Eev from 'eev';

@Injectable({
  providedIn: 'root'
})
export class EventbusService {

  constructor() { }

  initializeEventBus() {
    const eventWindow = window as EventWindow & typeof globalThis;

    if (!eventWindow.eventBus) {
      eventWindow.eventBus = new Eev();
    }

    eventWindow.eventBus.on('notification', (data) => {
      alert(`Notification: ${data}`);
    });

  }

  emitEvent(eventName: string, data: any) {
    const eventWindow = window as EventWindow & typeof globalThis;
    eventWindow.eventBus.emit(eventName, data);
  }
}
