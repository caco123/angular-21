import { ApplicationConfig, EnvironmentProviders, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpErrorInterceptor } from './interceptors/http-error-interceptor';
import { ConfigService } from './services/config-service';

const configInitializer: EnvironmentProviders = provideAppInitializer(async () => {
  const configService = inject(ConfigService);
  const res = await fetch('/configs/config.json');
  const config = await res.json();
  configService.setConfig(config);
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    configInitializer
  ]
};
