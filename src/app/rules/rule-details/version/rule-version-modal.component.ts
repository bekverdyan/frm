import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RuleEntry } from '../../model/rule-entry';
import { RuleContext } from '../../model/rule-context';
import { RulesRepository } from '../../dto/rules-repository';
import { KawaAdapterService } from '../../../shared/layouts/kawa/kawa-adapter.service';

@Component({
    selector: 'app-rule-version-undeploy',
    templateUrl: './rule-version-modal.component.html',
    styleUrls: ['./version.component.css']
})
export class RuleVersionModalComponent implements OnInit {
    rule: RuleEntry;
    error: string;
    success: string;
    content: any;
    versionDescription: string;
    chosenFileName: string;

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
        this.rule = this.context.targetRuleEntry;
    }

    goBack(): void {
        this.location.back();
    }

    cancel() {
        this.error = null;
        this.activeModal.dismiss('cancel');
    }

    submit(alsoSubmit?: boolean) {
        this.ruleRepository.createVersion(this.toPmoduleVersion()).subscribe(
            () => {
                console.log('successfully created pmodule version');
                this.error = null;
                this.success = 'OK';
                this.activeModal.dismiss('to the initial list');
            },
            () => {
                console.log('error on created pmodule version');
                this.success = null;
                this.error = 'ERROR';
            }
        );
    }

    toPmoduleVersion() {
        return {
            pmoduleName: this.rule.pmoduleName,
            pmoduleVersionDescription: this.versionDescription,
            pmoduleArtefactContent: this.content
        };
    }

    fileChanged(e) {
        this.content = e.target.files[0];
        this.chosenFileName = e.target.files[0].name;
        console.log('this content is: \n');

        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.content = fileReader.result;
        };
        fileReader.readAsText(this.content);
    }

    getFileNameDescription() {
        return this.chosenFileName ? this.chosenFileName : 'No file chosen';
    }
}
