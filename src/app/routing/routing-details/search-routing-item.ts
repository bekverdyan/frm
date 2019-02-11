/**
 * An object used to display filtered routing configuration names
 * on details popup
 */
export class SearchRoutingItem {
    routingConfId: string;
    routingConfDomainName: string;
    isSelected = false;

    constructor(routingConfId?: string, routingConfDomainName?: string, isSelected?: boolean) {
        this.routingConfId = routingConfId;
        this.routingConfDomainName = routingConfDomainName;
        this.isSelected = isSelected;
    }
}
