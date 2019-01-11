import { Observable } from 'rxjs';
import { RoutingEntry } from '../model/routing-entry';
import { ActionEntry } from '..';

export interface FrmRoutingConfigsAware {
    getRoutingConfig(id: number): Observable<RoutingEntry>;

    retrieveRoutingConfigs(): Observable<RoutingEntry[]>;

    retrieveRoutingActions(): Observable<ActionEntry[]>;
}
