import {Component, Input, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../../service/auth.service';

import {Router} from '@angular/router';
import {User} from '../../model/model.user';

import {VariablesGlobales} from '../../VariablesGlobales';
import {Utilisateur} from '../../model/model.utilisateur';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})





export class SigninComponent implements OnInit {


  userSubscription: Subscription;
  authSubscription: Subscription;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}
  ngOnInit() {
  this.authSubscription = this.authService.authSubject.subscribe(
    (reponse: boolean) => {
      this.authService.isAuth = reponse;
      console.log(this.authService.isAuth);
    }
  );

  this.userSubscription = this.authService.userSubject.subscribe(
    (reponse: Utilisateur) => {
      this.authService.user = reponse;
      console.log(this.authService.user);
    }
  );
}



  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.value.mail);

    console.log(form.value.motdepasse);
    const newUser = new Utilisateur('', '', '', '',
      form.value.mail, form.value.motdepasse, '', '');

    console.log('Tentative de connexion' );
    this.authService.signIn(newUser);

  }
}
