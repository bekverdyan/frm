import { RuleEntry } from 'app/rules/model/rule-entry';
import { Observable } from 'rxjs';
import { DomainEntry } from 'app/rules/model/domain-entry';
import { HttpResponse } from '@angular/common/http';
import { RuleActionEntry, RuleVersionEntry } from 'app/rules';

export interface FrmRulesAware {
    retrieveRules(): Observable<RuleEntry[]>;

    retrieveDomains(): Observable<DomainEntry[]>;

    retrieveRuleVersions(ruleId: string): Observable<RuleVersionEntry[]>;

    retrieveRuleActions(ruleId: string): Observable<RuleActionEntry[]>;

    createRule(rule: RuleEntry): Observable<HttpResponse<any>>;

    createVersion(data: any): Observable<HttpResponse<any>>;

    deployPmodule(data: any): Observable<HttpResponse<any>>;

    unDeployPmodule(data: any): Observable<HttpResponse<any>>;
}
