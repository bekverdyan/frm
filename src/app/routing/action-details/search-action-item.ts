/**
 * An object used to display filtered action names
 * on details popup
 */
export class SearchActionItem {
    id: string;
    name: string;
    domainName: string;
    isSelected = false;

    constructor(id?: string, name?: string, domainName?: string, isSelected?: boolean) {
        this.id = id;
        this.name = name;
        this.domainName = domainName;
        this.isSelected = isSelected;
    }
}
