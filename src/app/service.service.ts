import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {error} from 'selenium-webdriver';

// import 'rxjs/add/operator/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    constructor(private http: HttpClient) { }

    autorization(email, password){
        return this.http.post('http://ec2-54-88-87-181.compute-1.amazonaws.com:8889/login',{
            email: email,
            password: password
        });
    }
    logOut(token){
      return this.http.post('http://ec2-54-88-87-181.compute-1.amazonaws.com:8889/logout',{
        token:token
      })
    }
    registration(name,emails,password){
      return this.http.post('http://ec2-54-88-87-181.compute-1.amazonaws.com:8889/register',{
        username: name,
        email: emails,
        password: password
      })
    }
}

