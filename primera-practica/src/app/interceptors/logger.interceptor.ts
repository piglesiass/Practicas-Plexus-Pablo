import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('INTERCEPTOR EJECUTADO');

  console.log(`Método: ${req.method}, URL: ${req.url}`);
  return next(req).pipe(
    tap(response =>console.log('Respuesta:', response))
  );
};
