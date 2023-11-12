import {Injectable} from "@angular/core";
import {first, Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "@environments/environment";
import {jwtDecode} from "jwt-decode";
import {ErrorService} from "@app/_services/error.service";

@Injectable({providedIn: 'root'})
export class AuthService {


    constructor(
      private http: HttpClient,
      private router: Router,
      private errorService: ErrorService
    ) {
    }

    login(username: string, password: string, role: string): Observable<any> {

        let observable: Observable<any> = this.http.post<any>(`${environment.apiUrl}/login`, {
            "email": username,
            "password": password
        });
        observable.pipe(first()).subscribe(data => {
            console.log(data)
            const token = data['token'];
            const email = data['email'];
            const firstname = data['firstname'];
            const lastname = data['lastname'];
            const roleData = data['role'];
            const userId = data['ID'];
            if(role !== roleData) {
                this.errorService.showErrorSnackbar('Could not find user with this role ' + role);
                return
            }
            localStorage.setItem('token', token);
            localStorage.setItem('username', email);
            localStorage.setItem('userId', userId);
            localStorage.setItem('role', role);
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('lastname', lastname);
            this.router.navigateByUrl(role.toLowerCase())
        });

        return observable;
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

    get userId() {
        return localStorage.getItem('userId');
    }
}
