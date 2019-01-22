import { Component, OnInit } from '@angular/core';
import 'datatables.net';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RoutingEntry, RoutingContext } from '..';
import { DomainEntry } from 'src/app/rules/model/domain-entry';
import { RoutingRepository } from '../dto/routing-repository';
import { NavigationService } from '../../shared/navigation/navigation.service';
import { RulesRepository } from '../../rules/dto/rules-repository';
import { KawaAdapterService } from '../../shared/layouts/kawa/kawa-adapter.service';

@Component({
    selector: 'jhi-routing-management',
    templateUrl: './routing-management.component.html',
    styleUrls: ['./routing.component.css']
})
export class RoutingManagementComponent implements OnInit {
    availableRoutings: RoutingEntry[];
    domains: DomainEntry[];
    modalRef: NgbModalRef;
    listMode: boolean;
    usageFilter: string;
    moduleTable: any;
    subscription: any;

    constructor(
        private routingRepo: RoutingRepository,
        private rulesRepo: RulesRepository,
        private router: Router,
        private context: RoutingContext,
        private navService: NavigationService
    ) {}

    ngOnInit() {
        this.initCallBack();
        this.subscription = this.navService.getNavChangeEmitter().subscribe(eventName => this.refreshStateOnEvent(eventName));
    }

    initCallBack() {
        const self = this;
        this.listMode = true;

        this.rulesRepo.retrieveDomains().subscribe(data => {
            this.domains = data;
        });

        this.routingRepo.retrieveRoutingConfigs().subscribe(availableRoutings => {
            this.availableRoutings = availableRoutings;

            KawaAdapterService.initDataTable('routingsTable').then(function(dt) {
                self.moduleTable = dt;
            });
        });
    }

    refreshStateOnEvent(eventName: string) {
        if ('routingConfigs' === eventName) {
            KawaAdapterService.destroyDataTable('routingsTable');
            this.initCallBack();
        }
    }

    showRoutingDetails(entry: RoutingEntry) {
        this.listMode = false;
        this.context.setModel(this.moduleTable);
        this.context.setTarget(entry);
        this.context.print();
        // this.router.navigate(['/ruleDetails', entry.pmoduleId]);
    }

    createRoutingConfig() {
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
