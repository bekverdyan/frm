import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateMomentAdapter} from 'app/shared';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingManagementComponent} from 'app/routing/routing-management/routing-management.component';
import {RoutingActionsComponent} from 'app/routing/routing-actions/routing-actions.component';
import {RoutingDetailsComponent} from 'app/routing/routing-details/routing-details.component';
import {ActionDetailsComponent} from 'app/routing/action-details/action-details.component';

@NgModule({
    imports: [CommonModule, BrowserModule, FormsModule],
    declarations: [RoutingManagementComponent, RoutingActionsComponent, RoutingDetailsComponent, ActionDetailsComponent],
    providers: [{provide: NgbDateAdapter, useClass: NgbDateMomentAdapter}],
    entryComponents: [RoutingManagementComponent, RoutingActionsComponent, RoutingDetailsComponent, ActionDetailsComponent],
    exports: [FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoutingModule {
}
