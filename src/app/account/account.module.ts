import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { accountState, SessionsComponent } from './';
import { FrmSharedModule } from '../shared';

@NgModule({
    imports: [FrmSharedModule, RouterModule.forChild(accountState)],
    declarations: [SessionsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrmAccountModule {}
