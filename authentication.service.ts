import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

    login(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                if (user && user.token) {
                    // Decode the JWT token to get the user role
                    const decodedToken = this.jwtHelper.decodeToken(user.token);
                    
                    // Assuming the JWT payload has a 'role' property
                    const role = decodedToken.role;

                    // Store user details and role in local storage
                    localStorage.setItem(role === 'admin' ? 'adminToken' : 'userToken', user.token);
                }

                return user;
            }));
    }

    logout() {
        // Remove tokens from local storage to log the user out
        localStorage.removeItem('adminToken');
        localStorage.removeItem('userToken');
    }
}
