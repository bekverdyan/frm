import { AfterViewInit, Component, ElementRef, Renderer } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RulesRepository } from '../dto/rules-repository';
import { NavigationService } from '../../shared/navigation/navigation.service';

@Component({
    selector: 'jhi-rule',
    templateUrl: './rule-modal.component.html',
    styleUrls: ['./rule-modal.css']
})
export class RuleModalComponent implements AfterViewInit {
    name: string;
    usage: string;
    type: string;
    usageDescription: string;
    versionDescription: string;
    content: any;
    error: string;
    success: string;
    pmoduleCreated: boolean;
    chosenFileName: string;

    constructor(
        private eventManager: JhiEventManager,
        private rulesRepository: RulesRepository,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private router: Router,
        private navService: NavigationService,
        public activeModal: NgbActiveModal
    ) {
        this.pmoduleCreated = false;
        this.usage = 'RL';
        this.type = 'PYTHON';
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#name'), 'focus', []);
    }

    cancel() {
        this.error = null;
        this.activeModal.dismiss('cancel');
    }

    saveVersion() {
        this.savePmoduleVersion(false);
    }

    saveAndDeployVersion() {
        this.savePmoduleVersion(true);
    }

    savePmoduleVersion(deploy: boolean) {
        this.rulesRepository.createVersion(this.toPmoduleVersion()).subscribe(
            () => {
                console.log('successfully created pmodule version');
                this.error = null;
                this.success = 'OK';
                this.activeModal.dismiss('to the initial list');
            },
            () => {
                console.log('error on created pmodule version');
                this.success = null;
                this.error = 'ERROR';
            }
        );

        if (!this.error) {
            console.log('navigating to management');
            this.navService.emitNavChangeEvent('management');
        }
    }

    saveRule() {
        this.rulesRepository.createRule(this.toPmoduleData()).subscribe(
            () => {
                this.error = null;
                this.success = 'OK';
                this.pmoduleCreated = true;
            },
            () => {
                this.success = null;
                this.error = 'ERROR';
                this.pmoduleCreated = false;
            }
        );
    }

    register() {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    }

    toPmoduleVersion() {
        return {
            pmoduleName: this.name,
            pmoduleVersionDescription: this.versionDescription,
            pmoduleArtefactContent: this.content
        };
    }

    toPmoduleData() {
        return {
            pmoduleName: this.name,
            pmoduleUsage: this.usage,
            pmoduleType: this.type,
            pmoduleDescription: this.usageDescription
        };
    }

    fileChanged(e) {
        this.content = e.target.files[0];
        this.chosenFileName = e.target.files[0].name;
        console.log('this content is: \n');

        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.content = fileReader.result;
        };
        fileReader.readAsText(this.content);
    }

    getFileNameDescription() {
        return this.chosenFileName ? this.chosenFileName : 'No file chosen';
    }
}
