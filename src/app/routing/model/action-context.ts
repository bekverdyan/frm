import { Injectable } from '@angular/core';
import { ActionEntry } from './action-entry';

@Injectable({ providedIn: 'root' })
export class ActionContext {
    model: any;
    targetRoutingActionEntry: ActionEntry;

    setModel(model) {
        this.model = model;
    }

    setTarget(actionEntry: ActionEntry) {
        this.targetRoutingActionEntry = actionEntry;
    }

    print() {
        console.log(
            'action context: selectedId:' +
                this.targetRoutingActionEntry.name +
                ', selectedName: ' +
                this.targetRoutingActionEntry.domainName +
                ' , model: ' +
                this.model
        );
    }
}
