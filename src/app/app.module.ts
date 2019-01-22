import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FrmAccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { FrmCoreModule, StateStorageService } from './core';
import { RoutingModule } from './routing/routing.module';
import { RulesModule } from './rules/rules.module';
import { FindLanguageFromKeyPipe, FrmSharedModule } from './shared';
import { ErrorComponent, PageRibbonComponent } from './shared/layouts';
import { LayoutModule } from './shared/layouts/layout.module';
import { MainBaseComponent } from './shared/layouts/main/main-base.component';


@NgModule({
  declarations: [
    ErrorComponent,
    PageRibbonComponent,
    FindLanguageFromKeyPipe
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' }),
    FrmSharedModule,
    FrmCoreModule,
    FrmAccountModule,
    LayoutModule,
    RulesModule,
    RoutingModule
  ],
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
export class AppModule { }
