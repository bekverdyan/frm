import { AfterViewInit, Component, ElementRef, OnInit, Renderer } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
import { Router } from '@angular/router';
import { Principal, StateStorageService, LoginService } from '../../../core';

@Component({
    selector: 'jhi-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    account: Account;
    authenticationError: boolean;
    password: string;
    username: string;
    rememberMe: string;

    constructor(
        private principal: Principal,
        private eventManager: JhiEventManager,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private router: Router,
        private stateStorageService: StateStorageService,
        private loginService: LoginService
    ) {}

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    login() {
        this.loginService
            .login({
                username: this.username,
                password: this.password,
                rememberMe: this.rememberMe
            })
            .then(() => {
                this.authenticationError = false;
                if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
                    this.router.navigate(['']);
                }

                this.eventManager.broadcast({
                    name: 'authenticationSuccess',
                    content: 'Sending Authentication Success'
                });

                // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
                // // since login is succesful, go to stored previousState and clear previousState
                const redirect = this.stateStorageService.getUrl();
                if (redirect) {
                    this.stateStorageService.storeUrl(null);
                    this.router.navigate([redirect]);
                }
            })
            .catch(() => {
                this.authenticationError = true;
            });
    }
}
