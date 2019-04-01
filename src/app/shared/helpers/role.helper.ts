import { Injectable } from "@angular/core";
import { TokenHelper } from './token.helpers';
import * as jwt_decode from "jwt-decode";
import { NavigationConfig } from "../configs/navigation.config"
@Injectable()
export class RoleHelper {
    constructor(private tokenHelper: TokenHelper) {

    }

    getRole(): string {
        const role = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
        const token = this.tokenHelper.getToken();
        const tokenPayload = this.getDecodedAccessToken(token);
        const currentRole = tokenPayload[role];
        return currentRole;
    }

    getStartPage(): string {
        const role = this.getRole()
        const path = NavigationConfig.NavigationDictionay[role];
        return path;
    }


    private getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        }
        catch (Error) {
            return null;
        }
    }
}