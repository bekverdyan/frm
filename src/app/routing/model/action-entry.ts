export class ActionEntry {
    domainName: string;
    name: string;
    destination: string;
    adActionChannelEntries: string;

    constructor(actionDomainName: string, actionName: string, actionDestination: string, actionChannelName: string) {
        this.domainName = actionDomainName;
        this.name = actionName;
        this.destination = actionDestination;
        this.adActionChannelEntries = actionChannelName;
    }
}
