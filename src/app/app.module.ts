import './vendor.ts';

import { Injector, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { FindLanguageFromKeyPipe, FrmSharedModule } from 'app/shared';
import { FrmCoreModule } from 'app/core';
import { FrmAppRoutingModule } from './app-routing.module';
import { FrmAccountModule } from './account/account.module';
import { StateStorageService } from 'app/core/auth/state-storage.service';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorComponent, PageRibbonComponent } from './shared/layouts';
import { RouterModule } from '@angular/router';
import { RulesModule } from 'app/rules/rules.module';
import { LayoutModule } from 'app/shared/layouts/layout.module';
import { MainBaseComponent } from 'app/shared/layouts/main/main-base.component';
import { RoutingModule } from 'app/routing/routing.module';

@NgModule({
    imports: [
        RouterModule,
        FrmAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
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
