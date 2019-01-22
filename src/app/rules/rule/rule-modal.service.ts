import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RuleModalComponent } from '..';
import { RuleDeploymentModalComponent } from '../rule-details/deployment/rule-deployment-modal.component';

@Injectable({
    providedIn: 'root'
})
export class RuleModalService {
    private isCreateModalOpen = false;
    private isDeploymentModalOpen = false;

    constructor(private ngbModal: NgbModal) {}

    openPmoduleCreateModal(): NgbModalRef {
        if (this.isCreateModalOpen) {
            return;
        }
        this.isCreateModalOpen = true;
        const modalRef = this.ngbModal.open(RuleModalComponent, {
            size: 'lg',
            centered: true
        });
        modalRef.result.then(
            result => {
                this.isCreateModalOpen = false;
            },
            reason => {
                this.isCreateModalOpen = false;
            }
        );
        return null;
    }

    openDeploymentModal(): NgbModalRef {
        if (this.isDeploymentModalOpen) {
            return;
        }
        this.isDeploymentModalOpen = true;
        const modalRef = this.ngbModal.open(RuleDeploymentModalComponent, {
            size: 'lg',
            centered: true
        });
        modalRef.result.then(
            result => {
                this.isDeploymentModalOpen = false;
            },
            reason => {
                this.isDeploymentModalOpen = false;
            }
        );
        return modalRef;
    }
}
