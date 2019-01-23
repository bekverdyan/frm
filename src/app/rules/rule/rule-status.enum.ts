/**
 * Rule status enumeration contains all possible rule statuses that comes from server-side. It indicates whether
 * the rule is deployed or not. It may contain other statuses in future.
 *
 * @author Karen Margaryan
 * @since 1.0.0
 */
export enum RuleStatus {
    Deployed = 'Deployed',
    Undeployed = 'Undeployed'
}
