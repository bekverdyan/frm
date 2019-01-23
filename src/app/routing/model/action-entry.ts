export class ActionEntry {
    id: string;
    domainName: string;
    name: string;
    destination: string;
    adActionChannelEntries: string;

    constructor(id: string, actionDomainName: string, actionName: string, actionDestination: string, actionChannelName: string) {
        this.id = id;
        this.domainName = actionDomainName;
        this.name = actionName;
        this.destination = actionDestination;
        this.adActionChannelEntries = actionChannelName;
    }
}
