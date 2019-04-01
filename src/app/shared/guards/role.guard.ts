import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { RoleHelper } from '../helpers/role.helper';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(public auth: AuthService, public router: Router, private roleHelper: RoleHelper) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        //debugger;
        const expectedRole = route.data.expectedRole;
        const currentRole = this.roleHelper.getRole();
        if (currentRole !== expectedRole) {
            const startPage = this.roleHelper.getStartPage()
            this.router.navigate([startPage]);
            return false;
        }
        return true;
    }
}