import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'expand' })
export class AbbreviationLabelsPipe implements PipeTransform {
    private usageLabelMappings: Map<string, string> = new Map<string, string>([
        ['DP', 'Data preparation'],
        ['DH', 'Data historization'],
        ['DA', 'Data aggregate'],
        ['RL', 'Rule'],
        ['MD', 'Model'],
        ['JB', 'Job'],
        ['RC', 'Recovery']
    ]);

    private domainLabelMappings: Map<string, string> = new Map<string, string>([
        ['DP', 'Data preparation'],
        ['DH', 'Data historization'],
        ['DA', 'Data aggregate'],
        ['RL', 'Rule'],
        ['MD', 'Model'],
        ['JB', 'Job'],
        ['RC', 'Recovery']
    ]);

    transform(key: string, target = 'usageLabel'): any {
        if (target === 'usageLabel') {
            return this.usageLabelMappings.get(key);
        }

        if (target.toLowerCase() === 'domainLabel') {
            return this.domainLabelMappings.get(key);
        }
    }
}
