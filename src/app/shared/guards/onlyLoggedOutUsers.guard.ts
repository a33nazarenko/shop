import { Injectable } from "@angular/core";
import { TokenHelper } from '../helpers/token.helpers';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class OnlyLoggedOutUsersGuard implements CanActivate {

    constructor(
        private tokenHelper: TokenHelper, 
        private router: Router
    ) {

    }

    public canActivate(): boolean {
        if (!this.tokenHelper.isExist()) {
            return true;
        } else {
            this.router.navigate(['/admin/dashboard']);
            return false;
        }
    }
}