import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from './message';

/**
 * A common Modal Dialog Box component to be used for all messages which should be shown to users.
 *
 * Here is a simple use of this component
 *
 * <pre>
 *      const modalRef = this.ngModal.open(MessageDialogComponent);
 *      modalRef.componentInstance.title = 'ERROR 123';
 *      modalRef.componentInstance.messages = [ list of message objects ]
 * </pre>
 *
 * @author Karen Margaryan
 * @since 1.0.0
 */

@Component({
    selector: 'app-message-dialog',
    templateUrl: './message-dialog.component.html',
    styleUrls: ['./message-dialog.component.css', '../../../../node_modules/font-awesome/css/font-awesome.css']
})
export class MessageDialogComponent implements OnInit {
    // Modal dialog title text injected from outside
    @Input() title: string;

    // Messages list to show on the dialog
    @Input() messages: Message[];

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit() {}

    /**
     * Closes the opened Message Box dialog
     */
    close(): void {
        this.activeModal.close('User has read the MessageBox content');
    }
}
