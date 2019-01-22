import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrmSharedModule } from '../shared';
import { accountState, SessionsComponent } from './';

@NgModule({
    imports: [FrmSharedModule, RouterModule.forChild(accountState)],
    declarations: [SessionsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrmAccountModule {}
