import { AfterViewInit, Component, ElementRef, Renderer } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RulesRepository } from '../../rules/dto/rules-repository';
import { NavigationService } from '../../shared/navigation/navigation.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-rule',
    templateUrl: './rule-modal.component.html',
    styleUrls: ['./rule-modal.css']
})
export class RuleModalComponent implements AfterViewInit {
    versionDescription: AbstractControl;
    uploadableFile: any;
    error: string;
    success: string;
    pmoduleCreated: boolean;

    stage1Form: FormGroup;
    name: AbstractControl;
    usage: string;
    type: string;
    usageDescription: AbstractControl;

    stage2Form: FormGroup;

    constructor(
        private eventManager: JhiEventManager,
        private rulesRepository: RulesRepository,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private router: Router,
        private navService: NavigationService,
        private formbuilder: FormBuilder,
        public activeModal: NgbActiveModal
    ) {
        this.pmoduleCreated = false;
        this.stage1Form = this.formbuilder.group({
            name: ['', Validators.compose([Validators.required])],
            usageDescription: ['', Validators.compose([Validators.required])]
        });

        this.name = this.stage1Form.controls['name'];
        this.usageDescription = this.stage1Form.controls['usageDescription'];

        this.stage2Form = this.formbuilder.group({
            versionDescription: ['', Validators.compose([Validators.required])],
            uploadableFile: ['', Validators.required]
        });

        this.versionDescription = this.stage2Form.controls['versionDescription'];
        this.uploadableFile = this.stage2Form.controls['uploadableFile'];

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
        Object.keys(this.stage2Form.controls).forEach(field => {
            const control = this.stage2Form.get(field);
            control.markAsTouched({
                onlySelf: true
            });
        });

        if (this.stage2Form.valid) {
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
    }

    saveRule(values: Object) {
        Object.keys(this.stage1Form.controls).forEach(field => {
            const control = this.stage1Form.get(field);
            control.markAsTouched({
                onlySelf: true
            });
        });

        if (this.stage1Form.valid) {
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
    }

    register() {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    }

    toPmoduleVersion() {
        return {
            pmoduleName: this.name.value,
            pmoduleVersionDescription: this.versionDescription.value,
            pmoduleArtefactContent: this.uploadableFile.value
        };
    }

    toPmoduleData() {
        return {
            pmoduleName: this.name.value,
            pmoduleUsage: this.usage,
            pmoduleType: this.type,
            pmoduleDescription: this.usageDescription.value
        };
    }

    fileChanged(e) {
        const reader = new FileReader();

        if (e.target.files && e.target.files.length) {
            const [uploadableFile] = e.target.files;
            this.stage2Form.controls['uploadableFile'].setValue(uploadableFile ? uploadableFile.name : '');
            reader.readAsText(uploadableFile);

            reader.onload = () => {
                this.stage2Form.patchValue({
                    uploadableFile: reader.result
                });
            };
        }
    }
}
