import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from 'app/shared';
import { RulesModule } from 'app/rules/rules.module';
import { CommonModule } from '@angular/common';
import { FrmAppRoutingModule } from 'app/app-routing.module';
import { LoginComponent } from 'app/shared/layouts/login/login.component';
import { LandingComponent } from 'app/shared/layouts/landing/landing.component';
import { MainBaseComponent } from 'app/shared/layouts/main/main-base.component';
import { HeaderComponent } from 'app/shared/layouts/header/header.component';
import { RoutingModule } from 'app/routing/routing.module';

@NgModule({
    imports: [RulesModule, RoutingModule, CommonModule, FrmAppRoutingModule],
    declarations: [LandingComponent, LoginComponent, HeaderComponent, MainBaseComponent],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [FrmAppRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
