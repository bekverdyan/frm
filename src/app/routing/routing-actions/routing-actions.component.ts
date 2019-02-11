import {Component, OnInit} from '@angular/core';
import 'datatables.net';
import {Router} from '@angular/router';
import { ActionEntry } from '../model/action-entry';
import { RoutingRepository } from '../dto/routing-repository';
import { ActionContext } from '../model/action-context';
import { NavigationService } from '../../shared/navigation/navigation.service';
import { KawaAdapterService } from '../../shared/layouts/kawa/kawa-adapter.service';

@Component({
    selector: 'app-routing-actions',
    templateUrl: './routing-actions.component.html',
    styleUrls: ['./actions.component.css']
})
export class RoutingActionsComponent implements OnInit {
    availableRoutingActions: ActionEntry[];
    listMode: boolean;
    usageFilter: string;
    moduleTable: any;
    subscription: any;

    constructor(
        private routingRepo: RoutingRepository,
        private router: Router,
        private context: ActionContext,
        private navService: NavigationService
    ) {
    }

    ngOnInit() {
        this.initCallBack();
        this.subscription = this.navService.getNavChangeEmitter().subscribe(eventName => this.refreshStateOnEvent(eventName));
    }

    initCallBack() {
        const self = this;
        this.listMode = true;

        this.routingRepo.retrieveRoutingActions().subscribe(availableRoutingActions => {
            this.availableRoutingActions = availableRoutingActions;

            KawaAdapterService.initDataTable('routingActionsTable').then(function (dt) {
                self.moduleTable = dt;
            });
        });
    }

    refreshStateOnEvent(eventName: string) {
        if ('routingActions' === eventName) {
            KawaAdapterService.destroyDataTable('routingActionsTable');
            this.initCallBack();
        }
    }

    showRoutingActionDetails(entry: ActionEntry) {
        this.listMode = false;
        this.context.setModel(this.moduleTable);
        this.context.setTarget(entry);
        this.context.print();
        this.router.navigate(['/actionDetails', entry.id]);
    }

    createRoutingAction() {
        // this.modalRef = this.modalService.openPmoduleCreateModal();
    }

    resetTableFilters() {
        this.usageFilter = '';
        this.moduleTable
            .search('')
            .columns()
            .search('')
            .draw();
    }
}
