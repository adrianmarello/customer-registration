import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service';
import { LoginService } from './services/login.service';
import { ConfigurationService } from './services/configuration.service';

export function configurationServiceFactory(configurationService: ConfigurationService) {
  return () => configurationService.load();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configurationServiceFactory,
      deps: [
        ConfigurationService,
      ],
      multi: true,
  },
  LocalStorageService, LoginService, TitleCasePipe]
})
export class CoreModule { }
