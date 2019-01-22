import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {KawaAdapterService} from 'app/shared/layouts/kawa/kawa-adapter.service';
import {ActionContext, ActionEntry} from 'app/routing';
import {RoutingRepository} from 'app/routing/dto/routing-repository';
import {SearchRoutingItem} from 'app/routing/routing-details/search-routing-item';
import {SearchActionItem} from 'app/routing/action-details/search-action-item';

@Component({
    selector: 'jhi-action-details',
    templateUrl: './action-details.component.html',
    styleUrls: ['./details.component.css']
})
export class ActionDetailsComponent implements OnInit {
    actionEntry: ActionEntry;
    actionId: string;

    constructor(
        private route: ActivatedRoute,
        private context: ActionContext,
        private routingRepository: RoutingRepository,
        private location: Location,
    ) {
    }

    ngOnInit() {
        KawaAdapterService.initKTabs();
        KawaAdapterService.initSplitPanel();
        KawaAdapterService.initHamburgerMenu();
        this.actionEntry = this.context.targetRoutingActionEntry;

        this.route.params.subscribe(params => {
            this.actionId = params.id;
        });
    }

    goBack(): void {
        this.location.back();
    }

    getFilteredActionEntries(): SearchActionItem[] {
        const result: SearchActionItem[] = [];
        const max = this.context.model.page.len();
        const domainNames = this.context.model.column(0, {search: 'applied'}).data();
        const actionNames = this.context.model.column(2, {search: 'applied'}).data();
        const threshold = Math.min(max, domainNames.length);
        const targetEntry = this.context.targetRoutingActionEntry;

        for (let _i = 0; _i < threshold; _i++) {
            const item: SearchActionItem = new SearchActionItem();
            item.name = actionNames[_i];
            item.domainName = domainNames[_i];
            item.isSelected = targetEntry.name === actionNames[_i];
            result.push(item);
        }
        return result;
    }

    getTargetAction() {
        return this.context.targetRoutingActionEntry;
    }
}
