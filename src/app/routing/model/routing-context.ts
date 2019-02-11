import {Injectable} from '@angular/core';
import { RoutingEntry } from './routing-entry';

@Injectable({providedIn: 'root'})
export class RoutingContext {
    model: any;
    targetRoutingEntry: RoutingEntry;

    setModel(model) {
        this.model = model;
    }

    setTarget(routingEntry: RoutingEntry) {
        this.targetRoutingEntry = routingEntry;
    }
}
