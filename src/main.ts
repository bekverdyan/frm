import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FrmAppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ProdConfig } from './app/blocks/config/prod.config';

if (environment.production) {
  enableProdMode();
}

ProdConfig();

platformBrowserDynamic().bootstrapModule(FrmAppModule)
  .catch(err => console.error(err));
