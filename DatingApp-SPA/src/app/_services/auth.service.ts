import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  badeUrl = 'http://localhost:5000/api/auth/';
  jwthelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) {}

login(model: any) {
  return this.http.post(this.badeUrl + 'login' , model).pipe(
      map((response: any) => {
        const user = response;
        if(user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwthelper.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
    );

}

register(model: any) {
  return this.http.post(this.badeUrl + 'register', model);
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwthelper.isTokenExpired(token);
}
}
