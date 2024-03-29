import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ProdConfig } from './app/blocks/config/prod.config';

if (environment.production) {
  enableProdMode();
}

ProdConfig();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
