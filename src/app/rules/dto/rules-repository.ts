import { FrmRulesAware, RuleActionEntry, RuleEntry, RuleVersionEntry } from '..';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { DomainEntry } from '../model/domain-entry';
import { SERVER_API_URL } from 'src/app/app.constants';

@Injectable({ providedIn: 'root' })
export class RulesRepository implements FrmRulesAware {
    constructor(private http: HttpClient) {}

    retrieveDomains(): Observable<DomainEntry[]> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<DomainEntry[]>(SERVER_API_URL + '/api/domains', { headers });
    }

    retrieveRules(): Observable<RuleEntry[]> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<RuleEntry[]>(SERVER_API_URL + '/api/rules', { headers });
    }

    getRule(id: any): Observable<RuleEntry> {
        let params = new HttpParams();
        params = params.append('ruleId', id);
        return this.http.get<RuleEntry>(SERVER_API_URL + 'api/createPmodule', { params: params });
    }

    retrieveRuleVersions(ruleId: string): Observable<RuleVersionEntry[]> {
        let params = new HttpParams();
        params = params.append('ruleId', ruleId);
        return this.http.get<RuleVersionEntry[]>(SERVER_API_URL + 'api/versions', { params: params });
    }

    retrieveRuleActions(ruleId: string): Observable<RuleActionEntry[]> {
        let params = new HttpParams();
        params = params.append('ruleId', ruleId);
        return this.http.get<RuleActionEntry[]>(SERVER_API_URL + 'api/actions', { params: params });
    }

    createRule(rule: any): Observable<HttpResponse<any>> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.post(SERVER_API_URL + 'api/createPmodule', rule, { observe: 'response' });
    }

    createVersion(versionMetaData: any): Observable<HttpResponse<any>> {
        return this.http.post(SERVER_API_URL + 'api/createPmoduleVersion', versionMetaData, { observe: 'response' });
    }

    deployPmodule(data: any): Observable<HttpResponse<any>> {
        return undefined;
    }

    unDeployPmodule(pmoduleMetaData: any): Observable<HttpResponse<any>> {
        return this.http.post(SERVER_API_URL + 'api/unDeployPmodule', pmoduleMetaData, { observe: 'response' });
    }
}
