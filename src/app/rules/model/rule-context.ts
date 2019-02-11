import { Injectable } from '@angular/core';
import { RuleEntry } from './rule-entry';

@Injectable({ providedIn: 'root' })
export class RuleContext {
    model: any;
    targetRuleEntry: RuleEntry;

    setModel(model) {
        this.model = model;
    }

    setTarget(ruleEntry: RuleEntry) {
        this.targetRuleEntry = ruleEntry;
    }

    print() {
        console.log(
            'rule context: selectedId:' +
                this.targetRuleEntry.pmoduleId +
                ', selectedName: ' +
                this.targetRuleEntry.pmoduleName +
                ' , model: ' +
                this.model
        );
    }
}
