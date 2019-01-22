import { RuleActionEntry, RuleEntry, RuleVersionEntry } from 'app/rules';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';
import { FrmRoutingConfigsAware } from 'app/routing/api/interfaces';
import { RoutingEntry } from 'app/routing/model/routing-entry';
import { ActionEntry } from 'app/routing';

@Injectable({ providedIn: 'root' })
export class RoutingRepository implements FrmRoutingConfigsAware {
    constructor(private http: HttpClient) {}

    getRoutingConfig(id: any): Observable<RoutingEntry> {
        // todo: implement
        return null;
    }

    retrieveRoutingConfigs(): Observable<RoutingEntry[]> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<RoutingEntry[]>(SERVER_API_URL + '/api/routingConfigs', { headers });
    }

    retrieveRoutingActions(): Observable<ActionEntry[]> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<ActionEntry[]>(SERVER_API_URL + '/api/routingActions', { headers });
    }
}
