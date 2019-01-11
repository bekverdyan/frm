import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { RuleModalComponent } from './';
import { NgbDateMomentAdapter } from 'app/shared';
import { RuleDetailsComponent } from 'app/rules/rule-details/rule-details.component';
import { RulesManagementComponent } from 'app/rules/rules-management/rules-management.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AbbreviationLabelsPipe } from 'app/rules/util/AbbreviationLabelsPipe';
import { RuleDeploymentModalComponent } from 'app/rules/rule-details/deployment/rule-deployment-modal.component';
import { RuleVersionModalComponent } from 'app/rules/rule-details/version/rule-version-modal.component';
import { RuleUndeployModalComponent } from 'app/rules/rule-details/undeploy/rule-undeploy-modal.component';

@NgModule({
    imports: [CommonModule, BrowserModule, FormsModule],
    declarations: [
        RuleModalComponent,
        RuleDeploymentModalComponent,
        RuleVersionModalComponent,
        RuleUndeployModalComponent,
        RulesManagementComponent,
        RuleDetailsComponent,
        AbbreviationLabelsPipe
    ],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [
        RuleModalComponent,
        RuleDeploymentModalComponent,
        RuleVersionModalComponent,
        RuleUndeployModalComponent,
        RulesManagementComponent,
        RuleDetailsComponent
    ],
    exports: [RuleModalComponent, RuleDeploymentModalComponent, RuleVersionModalComponent, RuleUndeployModalComponent, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RulesModule {}
