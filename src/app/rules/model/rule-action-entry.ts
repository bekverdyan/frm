export class RuleActionEntry {
    id: string;
    created: string;
    createdBy: string;
    onDomainName: string;
    onModuleName: string;
    onModuleUsage: string;
    onModuleVersion: string;
    action: string;
    message: string;
    data: string;

    constructor(
        id: string,
        created: string,
        createdBy: string,
        onDomainName: string,
        onModuleName: string,
        onModuleUsage: string,
        onModuleVersion: string,
        action: string,
        message: string,
        data: any
    ) {
        this.id = id;
        this.created = created;
        this.createdBy = createdBy;
        this.onDomainName = onDomainName;
        this.onModuleName = onModuleName;
        this.onModuleUsage = onModuleUsage;
        this.onModuleVersion = onModuleVersion;
        this.action = action;
        this.message = message;
        this.data = data;
    }
}
