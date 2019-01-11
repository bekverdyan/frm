import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { RuleModalComponent } from './';
import { RuleDetailsComponent } from '../rules/rule-details/rule-details.component';
import { RulesManagementComponent } from '../rules/rules-management/rules-management.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AbbreviationLabelsPipe } from '../rules/util/AbbreviationLabelsPipe';
import { RuleDeploymentModalComponent } from '../rules/rule-details/deployment/rule-deployment-modal.component';
import { RuleVersionModalComponent } from '../rules/rule-details/version/rule-version-modal.component';
import { RuleUndeployModalComponent } from '../rules/rule-details/undeploy/rule-undeploy-modal.component';
import { NgbDateMomentAdapter } from '../shared';

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
