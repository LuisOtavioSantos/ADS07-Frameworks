import { bootstrapApplication } from '@angular/platform-browser';
import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { PaginaContexto } from './app/contexto/pagina-contexto';

if (location.pathname.startsWith('/contexto')) {
  bootstrapApplication(PaginaContexto, {
    providers: [provideBrowserGlobalErrorListeners(), provideZoneChangeDetection({ eventCoalescing: true })],
  }).catch((err) => console.error(err));
} else {
  bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));
}
