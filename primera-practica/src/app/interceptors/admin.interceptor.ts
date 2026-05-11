import { HttpInterceptorFn } from '@angular/common/http';

export const adminInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.includes('/admin')){
    const adminReq = req.clone({
      setHeaders:{
        'X-Admin': 'true'
      }
    });  
    return next(adminReq);
  } else{
    return next(req);
  }

};
