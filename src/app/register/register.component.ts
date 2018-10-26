import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ServiceService} from '../service.service';
import { Router} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public emails = "";
  public password = "";
  public name = "";

  public emailRequire = 0;
  public nameRequire = 0;
  public button = 0;
  public loading = true;
  public passwordRequire = 0
  public allEroors = 0;
  public ok = 0;
  public error = [];

  public ser = null;

  @Input('titleParent') public title;
  @Output('nas') public data = new EventEmitter()

  constructor(
    private _serviceService: ServiceService,
    private router: Router,
    private location: Location,

  ) { }



  ngOnInit() {

  }


  sent(value){
    this._serviceService.registration(this.emails, this.password)
      .subscribe((data) => {
        console.log(data)
        // this.loading = false
        // localStorage.setItem('receive token ', data.token)
        // this.ok = 1;
        // let it = this;
        // setTimeout(function () {
        //   it.router.navigateByUrl('/login');
        // },1000)
      },( error ) => {
        console.log(error)
        // this.filtersError(error);
      });
  }
  create(value){
    // console.log(this.location.go('/registration'))
    // this.data.emit(this.emails);
    this.error = [];
    this.valids(!this.password, 'password', "Password required");
    this.valids(!this.emails, 'email', "Email required");
    this.valids(!this.name, 'login', "login required");
    if (this.error.length> 0){
      this.allEroors = 1;
      this.button = 1;
    } else {
      this.sent();
    }
    this.setTime();
  }

  valids(valid, name, textEror){
    if (valid) {
      this.error.push(textEror);
      name == 'password' ? this.passwordRequire = 1 : this.emailRequire = 1
      name == 'login'?this.nameRequire = 1: this.nameRequire = 0
    }
  }
  filtersError(value){
    this.loading = false;
    const email = value.error.error;
    if (email != undefined && email != null && Array.isArray(email)) {
      for (let i = 0; i < email.length; i++) {
        this.error.push(email[i])
        this.allEroors = 1;
        this.emailRequire = 1;
        this.button = 1;
      }
    } else {
      this.error.push(email)
      this.allEroors = 1;
    }
  }
  setTime(){
    let it = this
    setTimeout(function () {
      it.allEroors = 0;
      it.ok = 0;
      it.passwordRequire = 0;
      it.emailRequire=0;
      it.nameRequire=0;
      it.button = 0;
    }, 2000);
  }
}


