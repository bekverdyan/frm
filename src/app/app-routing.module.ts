import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RulesManagementComponent} from 'app/rules/rules-management/rules-management.component';
import {RuleDetailsComponent} from 'app/rules/rule-details/rule-details.component';
import {RoutingManagementComponent} from 'app/routing';
import {RoutingActionsComponent} from 'app/routing/routing-actions/routing-actions.component';
import {RoutingDetailsComponent} from 'app/routing/routing-details/routing-details.component';
import {ActionDetailsComponent} from 'app/routing/action-details/action-details.component';

const mainRoutes: Routes = [
    {path: 'ruleDetails/:id', component: RuleDetailsComponent},
    {path: 'routingDetails/:id', component: RoutingDetailsComponent},
    {path: 'actionDetails/:id', component: ActionDetailsComponent},
    {path: 'management', component: RulesManagementComponent},
    {path: 'routingConfigs', component: RoutingManagementComponent},
    {path: 'routingActions', component: RoutingActionsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(mainRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class FrmAppRoutingModule {
}
