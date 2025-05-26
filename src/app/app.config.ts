import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withRouterConfig } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'ignore'
      }),
      withEnabledBlockingInitialNavigation()
    ),
    provideHttpClient() 
  ]
};
