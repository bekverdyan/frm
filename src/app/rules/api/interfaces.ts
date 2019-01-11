import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { RuleEntry } from '../model/rule-entry';
import { DomainEntry } from '../model/domain-entry';
import { RuleVersionEntry, RuleActionEntry } from '..';

export interface FrmRulesAware {
    getRule(id: number): Observable<RuleEntry>;

    retrieveRules(): Observable<RuleEntry[]>;

    retrieveDomains(): Observable<DomainEntry[]>;

    retrieveRuleVersions(ruleId: string): Observable<RuleVersionEntry[]>;

    retrieveRuleActions(ruleId: string): Observable<RuleActionEntry[]>;

    createRule(rule: RuleEntry): Observable<HttpResponse<any>>;

    createVersion(data: any): Observable<HttpResponse<any>>;

    deployPmodule(data: any): Observable<HttpResponse<any>>;

    unDeployPmodule(data: any): Observable<HttpResponse<any>>;
}
