import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Principal } from '../../../core';
import { NavigationService } from '../../navigation/navigation.service';

@Component({
    selector: 'app-main',
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
        private renderer: Renderer2
    ) {}

    ngAfterViewInit(): void {
        if (!this.isAuthenticated()) {
            this.renderer.selectRootElement('#username').focus();
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
