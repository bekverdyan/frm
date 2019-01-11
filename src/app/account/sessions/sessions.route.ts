import { Route } from '@angular/router';

import { SessionsComponent } from './sessions.component';
import { UserRouteAccessService } from 'src/app/core';

export const sessionsRoute: Route = {
    path: 'sessions',
    component: SessionsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.sessions'
    },
    canActivate: [UserRouteAccessService]
};
