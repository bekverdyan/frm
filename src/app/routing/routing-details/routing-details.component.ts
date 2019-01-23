import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { ActionEntry } from '../model/action-entry';
import { RoutingEntry } from '../model/routing-entry';
import { RoutingContext } from '../model/routing-context';
import { RoutingRepository } from '../dto/routing-repository';
import { KawaAdapterService } from '../../shared/layouts/kawa/kawa-adapter.service';
import { SearchRoutingItem } from './search-routing-item';

@Component({
    selector: 'jhi-routing-details',
    templateUrl: './routing-details.component.html',
    styleUrls: ['./details.component.css']
})
export class RoutingDetailsComponent implements OnInit {
    allRoutingActions: ActionEntry[];
    foreignActions: ActionEntry[];
    routingEntry: RoutingEntry;
    routerId: string;
    routingActions: ActionEntry[];

    constructor(
        private route: ActivatedRoute,
        private context: RoutingContext,
        private routingRepository: RoutingRepository,
        private location: Location,
        private routingRepo: RoutingRepository,
    ) {
    }

    ngOnInit() {
        KawaAdapterService.initKTabs();
        KawaAdapterService.initSplitPanel();
        KawaAdapterService.initHamburgerMenu();
        this.routingEntry = this.context.targetRoutingEntry;

        this.route.params.subscribe(params => {
            this.routerId = params.id;
        });

        const existingActions = this.routingEntry.routingConfActions;

        this.routingRepo.retrieveRoutingActions().subscribe(availableRoutingActions => {
            this.allRoutingActions = availableRoutingActions;

            this.foreignActions = availableRoutingActions.filter(
                value => -1 === existingActions.findIndex(e => e.actionsName === value.name));
        });

    }

    goBack(): void {
        this.location.back();
    }

    getFilteredRoutingEntries(): SearchRoutingItem[] {
        const result: SearchRoutingItem[] = [];
        const max = this.context.model.page.len();
        const domainNames = this.context.model.column(0, {search: 'applied'}).data();
        const routingIds = this.context.model.column(2, {search: 'applied'}).data();
        const threshold = Math.min(max, domainNames.length);
        const targetEntry = this.context.targetRoutingEntry;

        for (let _i = 0; _i < threshold; _i++) {
            const item: SearchRoutingItem = new SearchRoutingItem();
            item.routingConfDomainName = domainNames[_i];
            item.routingConfId = routingIds[_i];
            item.isSelected = targetEntry.routingConfId === routingIds[_i];
            result.push(item);
        }
        return result;
    }

    getTargetRouter() {
        return this.context.targetRoutingEntry;
    }
}
