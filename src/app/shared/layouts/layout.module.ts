import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { RulesModule } from '../../rules/rules.module';
import { NgbDateMomentAdapter } from '../../shared';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MainBaseComponent } from './main/main-base.component';
import { AppRoutingModule } from '../../app-routing.module';
import { RoutingModule } from '../../routing/routing.module';

@NgModule({
    imports: [RulesModule, RoutingModule, CommonModule, AppRoutingModule],
    declarations: [LandingComponent, LoginComponent, HeaderComponent, MainBaseComponent],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [AppRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
