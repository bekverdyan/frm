import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RuleDetailsComponent, RulesManagementComponent } from './rules';
import { RoutingDetailsComponent } from './routing/routing-details/routing-details.component';
import { ActionDetailsComponent } from './routing/action-details/action-details.component';
import { RoutingManagementComponent } from './routing';
import { RoutingActionsComponent } from './routing/routing-actions/routing-actions.component';

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
