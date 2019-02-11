import '../vendor.ts';

import { Injector, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { FrmAppRoutingModule } from './app-routing.module';
import { FrmAccountModule } from './account/account.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorComponent, PageRibbonComponent } from './shared/layouts';
import { RouterModule } from '@angular/router';
import { FrmSharedModule, FindLanguageFromKeyPipe } from './shared';
import { FrmCoreModule, StateStorageService } from './core';
import { LayoutModule } from './shared/layouts/layout.module';
import { RulesModule } from './rules/rules.module';
import { RoutingModule } from './routing/routing.module';
import { MainBaseComponent } from './shared/layouts/main/main-base.component';

@NgModule({
    imports: [
        RouterModule,
        FrmAppRoutingModule,
        NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' }),
        FrmSharedModule,
        FrmCoreModule,
        FrmAccountModule,
        LayoutModule,
        RulesModule,
        RoutingModule,
        FontAwesomeModule
    ],
    declarations: [ErrorComponent, PageRibbonComponent, FindLanguageFromKeyPipe],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [StateStorageService, Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [MainBaseComponent]
})
export class FrmAppModule {}
