import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KawaAdapterService } from 'src/app/shared/layouts/kawa/kawa-adapter.service';
import { RuleContext, RuleEntry, RulesRepository } from '../..';

@Component({
    selector: 'jhi-rule-undeploy',
    templateUrl: './rule-undeploy-modal.component.html',
    styleUrls: ['./undeploy.component.css']
})
export class RuleUndeployModalComponent implements OnInit {
    rule: RuleEntry;
    error: string;
    success: string;
    content: any;

    constructor(
        private route: ActivatedRoute,
        private context: RuleContext,
        public activeModal: NgbActiveModal,
        private ruleRepository: RulesRepository
    ) {}

    ngOnInit() {
        KawaAdapterService.initKTabs();
        KawaAdapterService.initSplitPanel();
        KawaAdapterService.initHamburgerMenu();
        this.rule = this.context.targetRuleEntry;
    }

    cancel() {
        this.error = null;
        this.activeModal.dismiss('cancel');
    }

    unDeploy() {
        this.ruleRepository.unDeployPmodule(this.createParams()).subscribe(
            () => {
                console.log('successfully undeployed pmodule');
                this.error = null;
                this.success = 'OK';
                this.activeModal.dismiss('to the initial list');
            },
            () => {
                console.log('error on undeploying pmodule');
                this.success = null;
                this.error = 'ERROR';
            }
        );
    }

    createParams() {
        return {
            pmoduleId: this.rule.pmoduleId,
            pmoduleName: this.rule.pmoduleName
        };
    }
}
