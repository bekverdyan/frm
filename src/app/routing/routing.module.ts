import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from '../shared';
import { RoutingActionsComponent } from './routing-actions/routing-actions.component';
import { RoutingManagementComponent } from './routing-management/routing-management.component';

@NgModule({
    imports: [CommonModule, BrowserModule, FormsModule],
    declarations: [RoutingManagementComponent, RoutingActionsComponent],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [RoutingManagementComponent, RoutingActionsComponent],
    exports: [FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoutingModule {}
