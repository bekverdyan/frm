import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RuleEntry } from '../../model/rule-entry';
import { RuleContext } from '../../model/rule-context';
import { RulesRepository } from '../../dto/rules-repository';
import { KawaAdapterService } from '../../../shared/layouts/kawa/kawa-adapter.service';

@Component({
    selector: 'jhi-rule-deployment',
    templateUrl: './rule-deployment-modal.component.html',
    styleUrls: ['./deployment.component.css']
})
export class RuleDeploymentModalComponent implements OnInit {
    rule: RuleEntry;
    error: string;
    success: string;

    constructor(
        private route: ActivatedRoute,
        private context: RuleContext,
        public activeModal: NgbActiveModal,
        private ruleRepository: RulesRepository,
        private location: Location
    ) {}

    ngOnInit() {
        KawaAdapterService.initKTabs();
        KawaAdapterService.initSplitPanel();
        KawaAdapterService.initHamburgerMenu();

        this.route.params.subscribe(params => {
            const id = this.context.targetRuleEntry.pmoduleId;
            // this.ruleRepository.getRule(id).subscribe(rule => (this.rule = rule));
        });
    }

    goBack(): void {
        this.location.back();
    }

    cancel() {
        this.error = null;
        this.activeModal.dismiss('cancel');
    }
}
