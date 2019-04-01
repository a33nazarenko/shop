
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { GenericResponseView } from 'src/app/shared/entities/generic-response.view';
import { map } from 'rxjs/operators';
import { LoginResponseUsersView } from '../entities/users/responses/login-response.users.view';
import { LoginRequestUsersView } from '../entities/users/requests/login-request-users.view';
import { RegistrationRequestUsersView } from '../entities/users/requests/registration-request-users.view';
import { LocalStorageService } from 'src/app/shared/services/localStorage.service';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private localStorageService: LocalStorageService) {

    }

    login(model: LoginRequestUsersView): Observable<LoginResponseUsersView> {
        return this.http.post<GenericResponseView<LoginResponseUsersView>>('http://localhost:52994/api/users/login', model)
            .pipe(map(x => {
                this.localStorageService.set('user', x.model);
                return x.model;
            }));

    }

    registration(model: RegistrationRequestUsersView): Observable<void> {
        return this.http.post<void>('http://localhost:52994/api/users/registration', model)
    }

    public getUserFromLocalStorage(): LoginResponseUsersView {
        const user = this.localStorageService.get<LoginResponseUsersView>('user');
        return user;
    }

    async logout(): Promise<void> {
        this.localStorageService.remove('user');
    }
}