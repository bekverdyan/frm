import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from './message';
import { MessageType } from './message-type.enum';
import { MessageDialogComponent } from './message-dialog.component';

/**
 * This service is responsible for showing Message Box dialogs. Message Box dialogs
 * can have multiple styles (error, success, warning, info etc) and each of them has
 * its own style and coloring.
 *
 * @author Karen Margaryan
 * @since 1.0.0
 */
@Injectable({
    providedIn: 'root'
})
export class MessageService {
    /**
     * Message dialog status (open/closed)
     */
    private isMessageDialogOpened = false;

    /**
     * Messages list to be shown
     */
    private messages: Message[] = [];

    /**
     * Service constructor
     * @param ngModal a service to open ModalDialog component
     */
    constructor(private ngModal: NgbModal) {}

    /**
     * Adds an informational message to the messages list. It ignores messages with duplicated code. If you add a message which
     * code is already exists in the list, it just ignores it.
     * @param text dialog text
     * @param code message code
     */
    addInfo(text: string, code = '') {
        this.addMessage(new Message(MessageType.Info, text, code));
    }

    /**
     * Adds a success message to the messages list. It ignores messages with duplicated code. If you add a message which
     * code is already exists in the list, it just ignores it.
     * @param text dialog text
     * @param code message code
     */
    addSuccess(text: string, code = '') {
        this.addMessage(new Message(MessageType.Success, text, code));
    }

    /**
     * Adds a warning message to the messages list. It ignores messages with duplicated code. If you add a message which
     * code is already exists in the list, it just ignores it.
     * @param text dialog text
     * @param code message code
     */
    addWarning(text: string, code = '') {
        this.addMessage(new Message(MessageType.Warning, text, code));
    }

    /**
     * Adds an error message to the messages list. It ignores messages with duplicated code. If you add a message which
     * code is already exists in the list, it just ignores it.
     * @param text dialog text
     * @param code message code
     */
    addError(text: string, code = '') {
        this.addMessage(new Message(MessageType.Error, text, code));
    }

    /**
     * Adds a new message to the messages list. It also ignores multiple messages with the same code.
     * @param message message object
     */
    addMessage(message: Message): void {
        const found = this.messages.find(function(m) {
            return m.getCode() === message.getCode();
        });

        // Do not allow duplicated messages
        if (!found) {
            this.messages.push(message);
        }
    }

    /**
     * Clears buffered messages list
     */
    clearMessages(): void {
        this.messages = [];
    }

    /**
     * Shows a Message Box dialog containing all messages stored in messages list
     * @param title dialot title
     */
    showMessageDialog(title: string): void {
        // Check if dialogs is not already opened
        if (!this.isMessageDialogOpened) {
            const modalRef = this.ngModal.open(MessageDialogComponent);
            modalRef.componentInstance.title = title;
            modalRef.componentInstance.messages = this.messages;

            this.isMessageDialogOpened = true;
            const this_ = this;
            modalRef.result.then(function() {
                this_.isMessageDialogOpened = false;
                this_.clearMessages();
            });
        }
    }
}
