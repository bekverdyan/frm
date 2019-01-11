import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    navchange: EventEmitter<string> = new EventEmitter();

    constructor() {}

    emitNavChangeEvent(tabName) {
        this.navchange.emit(tabName);
    }

    getNavChangeEmitter() {
        return this.navchange;
    }
}
