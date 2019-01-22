import { NgModule } from '@angular/core';

import { FrmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FrmSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FrmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FrmSharedCommonModule {}
