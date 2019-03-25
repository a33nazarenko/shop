
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {

    }

    getUserbyEmail():Observable<User> {
        return this.http.get<User>('http://localhost:3000/users');
    }

    createNewUser(user: User):Observable<User> {
        return this.http.post<User>('http://localhost:3000/users', user);
    }
}