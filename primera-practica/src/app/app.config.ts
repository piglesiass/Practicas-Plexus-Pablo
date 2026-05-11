import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authGuard } from './core/guards/auth.guard';
import { authInterceptor } from './interceptors/auth.interceptor';
import { loggerInterceptor } from './interceptors/logger.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { adminInterceptor } from './interceptors/admin.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideHttpClient(withInterceptors([authInterceptor, loggerInterceptor, errorInterceptor, loadingInterceptor, adminInterceptor])),
    provideTranslateService({
    loader: provideTranslateHttpLoader({prefix: '/assets/i18n/'}), 
    fallbackLang: 'en',
    lang: 'es'
    })
  ]
};
