import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { RuleModalComponent } from './';
import { NgbDateMomentAdapter } from 'app/shared';
import { RuleDetailsComponent } from 'app/rules/rule-details/rule-details.component';
import { RulesManagementComponent } from 'app/rules/rules-management/rules-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AbbreviationLabelsPipe } from 'app/rules/util/AbbreviationLabelsPipe';
import { RuleDeploymentModalComponent } from 'app/rules/rule-details/deployment/rule-deployment-modal.component';
import { RuleVersionModalComponent } from 'app/rules/rule-details/version/rule-version-modal.component';
import { RuleUndeployModalComponent } from 'app/rules/rule-details/undeploy/rule-undeploy-modal.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

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
