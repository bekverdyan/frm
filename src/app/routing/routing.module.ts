import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from 'app/shared';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingManagementComponent } from 'app/routing/routing-management/routing-management.component';
import { RoutingActionsComponent } from 'app/routing/routing-actions/routing-actions.component';

@NgModule({
    imports: [CommonModule, BrowserModule, FormsModule],
    declarations: [RoutingManagementComponent, RoutingActionsComponent],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [RoutingManagementComponent, RoutingActionsComponent],
    exports: [FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoutingModule {}
