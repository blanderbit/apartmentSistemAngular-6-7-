import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {error} from 'selenium-webdriver';
import {Router} from '@angular/router';

// import 'rxjs/add/operator/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    constructor(private http: HttpClient,
                private router: Router,) { }
    tokenIf(){
      let token = localStorage.getItem('token')
      console.log(token)
      if(token == undefined || token == null){
        this.router.navigateByUrl('/home');
      }
    }
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
    posts(){
      return this.http.get('http://ec2-54-88-87-181.compute-1.amazonaws.com:8889/posts')
    }
}

