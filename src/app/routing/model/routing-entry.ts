export class RoutingEntry {
    routingConfId: string;
    routingConfDomainName: string;
    routingConfRuleName: string;
    routingConfAlertRoutingId: string;
    routingConfBusinessId: string;
    routingConfActive: string;
    routingActions: string;
    routingConfDescription: string;
    routingConfRuleInfo: string;
    routingConfRuleDetectionType: string;
    routingConfNoAlertAuthorized: string;
    routingConfRegenerationDelay: string;

    constructor(
        routingConfId: string,
        routingConfDomainName: string,
        routingConfRuleName: string,
        routingConfAlertRoutingId: string,
        routingConfBusinessId: string,
        routingConfActive: string,
        routingActions: string,
        routingConfDescription: string,
        routingConfRuleInfo: string,
        routingConfRuleDetectionType: string,
        routingConfNoAlertAuthorized: string,
        routingConfRegenerationDelay: string
    ) {
        this.routingConfId = routingConfId;
        this.routingConfDomainName = routingConfDomainName;
        this.routingConfRuleName = routingConfRuleName;
        this.routingConfAlertRoutingId = routingConfAlertRoutingId;
        this.routingConfBusinessId = routingConfBusinessId;
        this.routingConfActive = routingConfActive;
        this.routingActions = routingActions;
        this.routingConfDescription = routingConfDescription;
        this.routingConfRuleInfo = routingConfRuleInfo;
        this.routingConfRuleDetectionType = routingConfRuleDetectionType;
        this.routingConfNoAlertAuthorized = routingConfNoAlertAuthorized;
        this.routingConfRegenerationDelay = routingConfRegenerationDelay;
    }
}
