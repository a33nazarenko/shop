import { Injectable } from "@angular/core";
import { TokenHelper } from '../helpers/token.helpers';
import { Router } from '@angular/router';

@Injectable()
export class OnlyLoggedInUserGuard {
    constructor(  private tokenHelper: TokenHelper, private router: Router) {
      
    };

    canActivate() {
        if(this.tokenHelper.isExist()) {
            return true
        } else {
            this.router.navigate(['/auth/signin']);
            return false
        }
    }
}