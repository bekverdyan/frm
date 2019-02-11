import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { RuleModalComponent } from './';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { RuleDeploymentModalComponent } from './rule-details/deployment/rule-deployment-modal.component';
import { RuleVersionModalComponent } from './rule-details/version/rule-version-modal.component';
import { RuleUndeployModalComponent } from './rule-details/undeploy/rule-undeploy-modal.component';
import { RulesManagementComponent } from './rules-management/rules-management.component';
import { RuleDetailsComponent } from './rule-details/rule-details.component';
import { AbbreviationLabelsPipe } from './util/AbbreviationLabelsPipe';
import { NgbDateMomentAdapter } from '../shared';

@NgModule({
    imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [
        RuleModalComponent,
        RuleDeploymentModalComponent,
        RuleVersionModalComponent,
        RuleUndeployModalComponent,
        RulesManagementComponent,
        RuleDetailsComponent,
        AbbreviationLabelsPipe,
        MessageDialogComponent
    ],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [
        RuleModalComponent,
        RuleDeploymentModalComponent,
        RuleVersionModalComponent,
        RuleUndeployModalComponent,
        RulesManagementComponent,
        RuleDetailsComponent,
        MessageDialogComponent
    ],
    exports: [
        RuleModalComponent,
        RuleDeploymentModalComponent,
        RuleVersionModalComponent,
        RuleUndeployModalComponent,
        FormsModule,
        ReactiveFormsModule,
        MessageDialogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RulesModule {}
