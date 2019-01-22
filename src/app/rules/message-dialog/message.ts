import {MessageType} from 'app/rules/message-dialog/message-type.enum';

/**
 * Message model class. Every message contains its type and text
 *
 * @author Karen Margaryan
 * @since 1.0.0
 */
export class Message {
    private type: MessageType;
    private text: string;
    private code: string;

    constructor(type: MessageType, text: string, code = '') {
        this.type = type;
        this.text = text;
        this.code = code;
    }

    /**
     * Gets message type
     */
    getType(): MessageType {
        return this.type;
    }

    /**
     * Sets message type
     * @param type message type
     */
    setType(type: MessageType) {
        this.type = type;
    }

    /**
     * Gets message text
     */
    getText(): string {
        return this.text;
    }

    /**
     * Sets message text
     * @param text message text
     */
    setText(text: string) {
        this.text = text;
    }

    /**
     * Gets message code
     */
    getCode(): string {
        return this.code;
    }

    /**
     * Sets message code
     * @param code message code
     */
    setCode(code: string) {
        this.code = code;
    }
}
