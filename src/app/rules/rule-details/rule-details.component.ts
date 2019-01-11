import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { KawaAdapterService } from 'src/app/shared/layouts/kawa/kawa-adapter.service';
import { RuleActionEntry, RuleContext, RuleEntry, RulesRepository, RuleVersionEntry, SearchRuleItem } from '..';
import { RuleDeploymentModalComponent } from './deployment/rule-deployment-modal.component';
import { RuleUndeployModalComponent } from './undeploy/rule-undeploy-modal.component';
import { RuleVersionModalComponent } from './version/rule-version-modal.component';

@Component({
    selector: 'jhi-rule-details',
    templateUrl: './rule-details.component.html',
    styleUrls: ['./details.component.css']
})
export class RuleDetailsComponent implements OnInit {
    rule: RuleEntry;
    ruleId: string;
    modalRef: NgbModalRef;
    isDeploymentModalOpen: boolean;
    isVersionModalOpen: boolean;
    ruleVersions: RuleVersionEntry[];
    ruleActions: RuleActionEntry[];
    showVersionArtefactContent: string;

    constructor(
        private route: ActivatedRoute,
        private context: RuleContext,
        private ruleRepository: RulesRepository,
        private location: Location,
        private ngModal: NgbModal
    ) {}

    ngOnInit() {
        KawaAdapterService.initKTabs();
        KawaAdapterService.initSplitPanel();
        KawaAdapterService.initHamburgerMenu();
        this.rule = this.context.targetRuleEntry;

        this.route.params.subscribe(params => {
            this.ruleId = params.id;
            this._loadRuleVersions(this.ruleId);
            this.ruleRepository.retrieveRuleActions(this.ruleId).subscribe(ruleActions => (this.ruleActions = ruleActions));
        });
    }

    _loadRuleVersions(ruleId: string): void {
        this.ruleRepository.retrieveRuleVersions(ruleId).subscribe(ruleVersions => {
            this.ruleVersions = ruleVersions;

            if (this.ruleVersions) {
                const latest: RuleVersionEntry = this.ruleVersions[0];
                if (latest) {
                    this.showVersionArtefactContent = latest.pmoduleVersionArtefactContent;
                }
            }
        });
    }

    goBack(): void {
        this.location.back();
    }

    openDeployModal() {
        const modalRef = this.ngModal.open(RuleDeploymentModalComponent, {
            size: 'lg',
            centered: true
        });
        modalRef.result.then(
            result => {
                this.isDeploymentModalOpen = false;
            },
            reason => {
                this.isDeploymentModalOpen = false;
            }
        );

        this.modalRef = modalRef;
    }

    openCreateVersionModal() {
        const modalRef = this.ngModal.open(RuleVersionModalComponent, {
            size: 'lg',
            centered: true
        });
        modalRef.result.then(
            result => {
                this.isVersionModalOpen = false;
            },
            reason => {
                this.isVersionModalOpen = false;
                // Update rule versions list
                this._loadRuleVersions(this.ruleId);
            }
        );

        this.modalRef = modalRef;
    }

    openUndeployModal() {
        const modalRef = this.ngModal.open(RuleUndeployModalComponent, {
            size: 'lg',
            centered: true
        });
        modalRef.result.then(
            result => {
                this.isVersionModalOpen = false;
            },
            reason => {
                this.isVersionModalOpen = false;
            }
        );

        this.modalRef = modalRef;
    }

    getFilteredRuleEntries(): SearchRuleItem[] {
        const result: SearchRuleItem[] = [];
        const max = this.context.model.page.len();
        const data = this.context.model.column(0, { search: 'applied' }).data();
        const threshold = Math.min(max, data.length);
        const targetEntry = this.context.targetRuleEntry;

        for (let _i = 0; _i < threshold; _i++) {
            const item: SearchRuleItem = new SearchRuleItem();
            item.pmoduleName = data[_i];
            item.pmoduleDescription = data[_i];
            item.isSelected = targetEntry.pmoduleName === data[_i];
            result.push(item);
        }
        return result;
    }

    getTargetModule() {
        return this.context.targetRuleEntry;
    }

    getVersionRowClass(version: RuleVersionEntry) {
        return version.pmoduleVersionDeployedOnDomains ? 'deployedVersion version-todfasdfolastip' : 'version-tooltip';
    }
}
