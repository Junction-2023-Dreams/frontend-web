import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {


    constructor(
      private http: HttpClient,
      private router: Router,
    ) {
    }

    login(username: string, password: string, role: string): Observable<any> {
        localStorage.setItem('token', username);
        localStorage.setItem('username', username);
        localStorage.setItem('userId', username);
        localStorage.setItem('role', role);
        localStorage.setItem('firstname', "John");
        localStorage.setItem('lastname', "Doe");


        return of(null);
        // connect with backend
        return this.http.post<any>(`/api/auth/login`, {
            "username": username,
            "password": password,
            "role": role
        });
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        this.router.navigateByUrl('/login');
    }

    isLoggedIn() {
        return !!localStorage.getItem('token');
    }


    hasRole(doctor: string) {
        return doctor === localStorage.getItem('role');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    get username() {
        return localStorage.getItem('username');
    }

    get firstname() {
        return localStorage.getItem('firstname');
    }

    get lastname() {
        return localStorage.getItem('lastname');
    }

}
