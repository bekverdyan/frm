import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RulesModule } from '../../rules/rules.module';
import { RoutingModule } from '../../routing/routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainBaseComponent } from './main/main-base.component';
import { NgbDateMomentAdapter } from '../util/datepicker-adapter';
import { FrmAppRoutingModule } from '../../app-routing.module';

@NgModule({
    imports: [RulesModule, RoutingModule, CommonModule, FrmAppRoutingModule],
    declarations: [LandingComponent, LoginComponent, HeaderComponent, MainBaseComponent],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [FrmAppRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
