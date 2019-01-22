import { FrmRulesAware, RuleActionEntry, RuleEntry, RuleVersionEntry } from 'app/rules';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';
import { DomainEntry } from 'app/rules/model/domain-entry';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from 'app/rules/message-dialog/message.service';
import { CommonErrorHandler } from 'app/core/error/common-error-handler';

@Injectable({ providedIn: 'root' })
export class RulesRepository implements FrmRulesAware {
    constructor(private http: HttpClient, private messagService: MessageService, private commonErrorHandler: CommonErrorHandler) {}

    retrieveDomains(): Observable<DomainEntry[]> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http
            .get<DomainEntry[]>(SERVER_API_URL + '/api/domains', { headers })
            .pipe(
                tap(_ => console.log('RulesRepository => retrieveDomains')),
                catchError(this.commonErrorHandler.handleError<DomainEntry[]>('Something went wrong while getting domains list.', []))
            );
    }

    retrieveRules(): Observable<RuleEntry[]> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http
            .get<RuleEntry[]>(SERVER_API_URL + '/api/rules', { headers })
            .pipe(
                tap(_ => console.log('RulesRepository => retrieveRules')),
                catchError(this.commonErrorHandler.handleError<RuleEntry[]>('Something went wrong while getting rules list.', []))
            );
    }

    retrieveRuleVersions(ruleId: string): Observable<RuleVersionEntry[]> {
        let params = new HttpParams();
        params = params.append('ruleId', ruleId);

        return this.http
            .get<RuleVersionEntry[]>(SERVER_API_URL + 'api/versions', { params: params })
            .pipe(
                tap(_ => console.log('RulesRepository => retrieveRuleVersions')),
                catchError(this.commonErrorHandler.handleError<RuleVersionEntry[]>('Something went wrong while getting rule versions.', []))
            );
    }

    retrieveRuleActions(ruleId: string): Observable<RuleActionEntry[]> {
        let params = new HttpParams();
        params = params.append('ruleId', ruleId);
        return this.http
            .get<RuleActionEntry[]>(SERVER_API_URL + 'api/actions', { params: params })
            .pipe(
                tap(_ => console.log('RulesRepository => retrieveRuleActions')),
                catchError(this.commonErrorHandler.handleError<RuleActionEntry[]>('Something went wrong while getting rule actions list.', []))
            );
    }

    createRule(rule: any): Observable<HttpResponse<any>> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http
            .post(SERVER_API_URL + 'api/createPmodule', rule, { observe: 'response' })
            .pipe(
                tap(_ => console.log('RulesRepository => createRule')),
                catchError(this.commonErrorHandler.handleError<any>('Something went wrong while creating a rule.', null))
            );
    }

    createVersion(versionMetaData: any): Observable<HttpResponse<any>> {
        return this.http
            .post(SERVER_API_URL + 'api/createPmoduleVersion', versionMetaData, { observe: 'response' })
            .pipe(
                tap(_ => console.log('RulesRepository => createVersion')),
                catchError(this.commonErrorHandler.handleError<any>('Something went wrong while creating a rule version.', null))
            );
    }

    deployPmodule(data: any): Observable<HttpResponse<any>> {
        return undefined;
    }

    unDeployPmodule(pmoduleMetaData: any): Observable<HttpResponse<any>> {
        return this.http
            .post(SERVER_API_URL + 'api/unDeployPmodule', pmoduleMetaData, { observe: 'response' })
            .pipe(
                tap(_ => console.log('RulesRepository => unDeployPmodule')),
                catchError(this.commonErrorHandler.handleError<any>('Something went wrong while un-deploying the PModule.', null))
            );
    }

}
