import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../navigation/navigation.service';
import { Principal } from '../../../core';

@Component({
    selector: 'jhi-main',
    templateUrl: './main-base.component.html',
    styleUrls: ['./main-base.component.css']
})
export class MainBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    isWelcomeState: boolean;
    activeTab: string;
    account: Account;
    subscription: any;

    constructor(
        private router: Router,
        private navService: NavigationService,
        private principal: Principal,
        private elementRef: ElementRef,
        private renderer: Renderer
    ) {}

    ngAfterViewInit(): void {
        if (!this.isAuthenticated()) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
        }
    }

    ngOnInit(): void {
        this.isWelcomeState = true;

        this.subscription = this.navService.getNavChangeEmitter().subscribe(item => this.handleNavigationRequest(item));
    }

    handleNavigationRequest(activeTab: string) {
        if (['management', 'editor', 'routingConfigs', 'routingActions'].includes(activeTab)) {
            this.isWelcomeState = false;
            this.activeTab = activeTab;
            this.router.navigate(['/' + activeTab]);
        }
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    navigate(targetTab: string) {
        console.log('target tab is: ' + targetTab);
        this.isWelcomeState = false;
        this.activeTab = targetTab;

        this.router.navigate(['/' + targetTab]);
    }

    getActiveTab() {
        return this.activeTab;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    isRuleMode() {
        return 'management' === this.activeTab || !this.activeTab;
    }

    isConfigMode() {
        return 'routingConfigs' === this.activeTab || 'routingActions' === this.activeTab;
    }
}
