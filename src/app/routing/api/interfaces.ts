import { Observable } from 'rxjs';
import { RoutingEntry } from 'app/routing/model/routing-entry';
import { ActionEntry } from 'app/routing';

export interface FrmRoutingConfigsAware {
    getRoutingConfig(id: number): Observable<RoutingEntry>;

    retrieveRoutingConfigs(): Observable<RoutingEntry[]>;

    retrieveRoutingActions(): Observable<ActionEntry[]>;
}
