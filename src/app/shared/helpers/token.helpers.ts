import { Injectable } from "@angular/core";
import { LocalStorageService } from '../services/localStorage.service';
import { LoginResponseUsersView } from 'src/app/auth/shared/entities/users/responses/login-response.users.view';


@Injectable()

export class TokenHelper {
    private token: string;

    constructor(private localStorageService: LocalStorageService) { }

    public getToken(): string {
        if(!this.isExist()) {
            return "";
        }
        return this.token;
    }

    public isExist(): boolean {
        this.token = this.getTokenFromLocalStorage();
        if(this.token) {
            return true;
        }
        return false;
    }
    private getTokenFromLocalStorage(): string {
        let user = this.localStorageService.get<LoginResponseUsersView>('user');
        let token: string = '';
        if(user != null) {
            token = user.token;
        }
        return token;
    }
}