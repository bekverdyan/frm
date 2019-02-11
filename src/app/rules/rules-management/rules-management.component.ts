import { Component, OnInit } from '@angular/core';
import 'datatables.net';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RuleEntry } from '../model/rule-entry';
import { DomainEntry } from '../model/domain-entry';
import { RulesRepository } from '../dto/rules-repository';
import { RuleContext } from '../model/rule-context';
import { RuleModalService } from '../rule/rule-modal.service';
import { NavigationService } from '../../shared/navigation/navigation.service';
import { KawaAdapterService } from '../../shared/layouts/kawa/kawa-adapter.service';

@Component({
    selector: 'app-rules-management',
    templateUrl: './rules-management.component.html',
    styleUrls: ['./management.component.css']
})
export class RulesManagementComponent implements OnInit {
    availableRules: RuleEntry[];
    domains: DomainEntry[];
    modalRef: NgbModalRef;
    listMode: boolean;
    usageFilter: string;
    moduleTable: any;
    subscription: any;

    constructor(
        private rulesRepo: RulesRepository,
        private router: Router,
        private context: RuleContext,
        private modalService: RuleModalService,
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

        this.rulesRepo.retrieveRules().subscribe(availableRules => {
            this.availableRules = availableRules;

            KawaAdapterService.initDataTable('rulesTable').then(function(dt) {
                self.moduleTable = dt;
            });
        });
    }

    refreshStateOnEvent(eventName: string) {
        if ('management' === eventName) {
            KawaAdapterService.destroyDataTable('rulesTable');
            this.initCallBack();
        }
    }

    showRuleDetails(entry: RuleEntry) {
        this.listMode = false;
        this.context.setModel(this.moduleTable);
        this.context.setTarget(entry);
        this.context.print();
        this.router.navigate(['/ruleDetails', entry.pmoduleId]);
    }

    createModule() {
        this.modalRef = this.modalService.openPmoduleCreateModal();
    }

    getRuleStatusStyle(entry: RuleEntry): string {
        if (!entry) {
            console.warn('an empty entry queried for status style');
            return '';
        }

        return entry.pmoduleStatus === 'Deployed' ? 'labelDeploy' : 'labelUndeploy';
    }

    filterTableByUsage(usage: string) {
        // todo: add checking
        this.usageFilter = usage;
        this.moduleTable
            .columns(3)
            .search(usage)
            .draw();
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
