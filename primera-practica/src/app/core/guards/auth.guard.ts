import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  if (isLoggedIn){
    return true;
  }else{
    return inject(Router).createUrlTree(['/login']);
  }
};
