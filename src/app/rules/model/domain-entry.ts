export class DomainEntry {
    domainId: string;
    // mandatory
    domainName: string;
    domainBusinessId: string;
    domainType: string;

    constructor(domainId: string, domainName: string, domainBusinessId: string, domainType: string) {
        this.domainId = domainId;
        this.domainName = domainName;
        this.domainBusinessId = domainBusinessId;
        this.domainType = domainType;
    }
}
