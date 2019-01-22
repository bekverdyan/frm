import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageType } from 'app/rules/message-dialog/message-type.enum';
import { MessageService } from 'app/rules/message-dialog/message.service';
import { Injectable } from '@angular/core';

/**
 * Common error handling class. This class may have multiple error handling methods each of them treat the error
 * situation differently.
 */
@Injectable({
    providedIn: 'root'
})
export class CommonErrorHandler {

    constructor(private messageService: MessageService) {
    }

    /**
     * Error handling method. In case of any appeared issues, this method should be called, which will log
     * into the console, show a popup message and return a special result to let the application keep running to
     * avoid application crashes.
     *
     * @param operation indicates during which operation the issue appeared, and that will be shown on the Message Box
     * @param result a special value which will let the application keep running even in case of appeared issue. Usually
     * this result is an empty list of null or something like this
     */
    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.error(operation);

            let message = '';
            // this.log(`${operation} failed: ${error.message}`);
            if (error instanceof HttpErrorResponse) {

                // TODO: replace error messages with multilingual messages
                switch (error.status) {
                    case 400:
                        message = 'Invalid request to the server';
                        break;

                    case 500:
                        message = 'Something went wrong. Please try again later';
                        break;

                    case 502:
                    case 503:
                    case 504:
                        message = 'Service is not available';
                        break;

                    // default:
                    //     message = 'Something went wrong. Please contact to the system administrator';
                }
            }

            // Show Popup Dialog only if that case only for specific cases
            if (message) {
                this.messageService.addError(message, error.status);
                this.messageService.showMessageDialog(MessageType.Error);

                // Let the app keep running by returning an empty or special result
                return of(result as T);
            }

            // Propagate error
            throw error;
        };
    }

}
