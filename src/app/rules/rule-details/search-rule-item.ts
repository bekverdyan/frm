/**
 * An object used to display filtered pModules names
 * on rule details window
 */
export class SearchRuleItem {
    pmoduleId: string;
    pmoduleName: string;
    pmoduleDescription: string;
    isSelected = false;

    constructor(pmoduleId?: string, pmoduleName?: string, pmoduleDescription?: string, isSelected?: boolean) {
        this.pmoduleId = pmoduleId;
        this.pmoduleName = pmoduleName;
        this.pmoduleDescription = pmoduleDescription;
        this.isSelected = isSelected;
    }
}
