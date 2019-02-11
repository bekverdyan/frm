export class RuleVersionEntry {
    pmoduleVersionId: string;
    // mandatory ?
    pmoduleVersionNumber: string;
    pmoduleVersionArtefactLocation: string;
    pmoduleVersionArtefactContent: string;
    pmoduleVersionArtefactSeal: string;
    pmoduleVersionCreated: string;
    createdDateAsText: string;
    createdTimeAsText: string;
    // mandatory
    pmoduleVersionCreatedBy: string;
    pmoduleVersionDeploymentsEnabled: boolean;
    pmoduleVersionDeployedOnDomains: boolean;

    constructor(
        pmoduleVersionId: string,
        pmoduleVersionNumber: string,
        pmoduleVersionArtefactLocation: string,
        pmoduleVersionArtefactContent: string,
        pmoduleVersionArtefactSeal: string,
        pmoduleVersionCreated: string,
        createdDateAsText: string,
        createdTimeAsText: string,
        pmoduleVersionCreatedBy: string,
        pmoduleVersionDeploymentsEnabled: boolean,
        pmoduleVersionDeployedOnDomains: any
    ) {
        this.pmoduleVersionId = pmoduleVersionId;
        this.pmoduleVersionNumber = pmoduleVersionNumber;
        this.pmoduleVersionArtefactLocation = pmoduleVersionArtefactLocation;
        this.pmoduleVersionArtefactContent = pmoduleVersionArtefactContent;
        this.pmoduleVersionArtefactSeal = pmoduleVersionArtefactSeal;
        this.pmoduleVersionCreated = pmoduleVersionCreated;
        this.createdDateAsText = createdDateAsText;
        this.createdTimeAsText = createdTimeAsText;
        this.pmoduleVersionCreatedBy = pmoduleVersionCreatedBy;
        this.pmoduleVersionDeploymentsEnabled = pmoduleVersionDeploymentsEnabled;
        this.pmoduleVersionDeployedOnDomains = pmoduleVersionDeployedOnDomains;
    }
}
