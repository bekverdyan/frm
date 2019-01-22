export class RuleEntry {
    pmoduleId: string;
    pmoduleName: string;
    pmoduleDescription: string;
    pmoduleType: string;
    pmoduleUsage: string;
    pmoduleStatus: string;
    lastVersionNumber: string;
    pmoduleVersionDescription: string;
    deploymentsDomains: string;

    constructor(
        pmoduleId?: string,
        pmoduleName?: string,
        pmoduleDescription?: string,
        pmoduleType?: string,
        pmoduleUsage?: string,
        pmoduleStatus?: string,
        lastVersionNumber?: string,
        pmoduleVersionDescription?: string,
        deploymentsDomains?: string
    ) {
        this.pmoduleId = pmoduleId;
        this.pmoduleType = pmoduleType;
        this.pmoduleName = pmoduleName;
        this.pmoduleUsage = pmoduleUsage;
        this.pmoduleStatus = pmoduleStatus;
        this.lastVersionNumber = lastVersionNumber;
        this.deploymentsDomains = deploymentsDomains;
        this.pmoduleDescription = pmoduleDescription;
        this.pmoduleVersionDescription = pmoduleVersionDescription;
    }
}
