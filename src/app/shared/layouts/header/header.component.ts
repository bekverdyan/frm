import { Component, OnInit } from '@angular/core';
import { Principal, LoginService } from 'src/app/core';

@Component({
    selector: 'jhi-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private principal: Principal, private loginService: LoginService) {}

    ngOnInit() {
        console.log('initializing header component....');
    }

    getUserDisplayName() {
        return this.principal.getUserProperty('name');
    }

    logout() {
        this.loginService.logout();
    }
}
