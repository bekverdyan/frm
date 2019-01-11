import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StateStorageService } from 'src/app/core/auth/state-storage.service';
import { LoginService } from 'src/app/core';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
    constructor(private stateStorageService: StateStorageService, private injector: Injector, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401 && err.url && !err.url.includes('/api/account')) {
                            const destination = this.stateStorageService.getDestinationState();
                            if (destination !== null) {
                                const to = destination.destination;
                                const toParams = destination.params;
                                if (to.name === 'accessdenied') {
                                    this.stateStorageService.storePreviousState(to.name, toParams);
                                }
                            } else {
                                this.stateStorageService.storeUrl('/');
                            }

                            const r: LoginService = this.injector.get(LoginService);
                            r.logout();
                        }
                    }
                }
            )
        );
    }
}
