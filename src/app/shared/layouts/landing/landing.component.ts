import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation/navigation.service';

@Component({
    selector: 'jhi-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./welcome.css']
})
export class LandingComponent implements OnInit {
    constructor(private navService: NavigationService) {}

    ngOnInit() {}

    navigate(target) {
        this.navService.emitNavChangeEvent(target);
    }
}
