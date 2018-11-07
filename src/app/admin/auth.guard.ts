import {AuthService} from '../model/auth.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

export class AuthGuard {
  constructor(private router: Router,
              private auth: AuthService) { }

  // canActivate(route: ActivatedRouteSnapshot,
  //             state: RouterStateSnapshot): boolean {
  //   if (!this.auth.authenticated) {
  //     this.router.navigateByUrl("/admin/auth");
  //     return false;
  //   }
  //   return true;
  // }

}
