import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleDetailsComponent } from './rules/rule-details/rule-details.component';
import { RulesManagementComponent } from './rules/rules-management/rules-management.component';

const mainRoutes: Routes = [
  { path: 'ruleDetails/:id', component: RuleDetailsComponent },
  { path: 'management', component: RulesManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
