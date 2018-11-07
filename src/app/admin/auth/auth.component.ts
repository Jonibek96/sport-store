import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;
  public errorLogin: string;
  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
  }


  // authenticate(form: NgForm) {
  //   if (form.valid) {
  //     this.auth.authenticate(this.username, this.password)
  //       .subscribe(response => {
  //         if (response) {
  //           this.router.navigateByUrl("/admin/main");
  //         }
  //         this.errorMessage = "Authentication Failed";
  //       })
  //   } else {
  //     this.errorMessage = "Form Data Invalid";
  //   }
  // }

  authenticate(form: NgForm){
    if (form.valid && form.value.username === 'admin' && form.value.password === '1234'){
      this.router.navigateByUrl("/admin/main");
    }else  if(form.valid && form.value.username !== 'admin' && form.value.password !== '1234' ){
      this.errorLogin = 'Неверний логин или парол'
    }
    else{
      this.errorMessage = "Введите данные формы";
    }
  }
}
