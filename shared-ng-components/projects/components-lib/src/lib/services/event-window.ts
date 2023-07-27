import { Eev } from 'eev';

export interface EventWindow extends Window {
    eventBus: Eev;
}