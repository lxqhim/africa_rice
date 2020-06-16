import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {VariablesGlobales} from '../VariablesGlobales';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuardService implements  CanActivate {

  constructor(private authService: AuthService, private router: Router, private varia: VariablesGlobales) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.varia.authStatus) {
      return true;
    } else {
      this.router.navigate(['/auth']);
    }
  }

}
