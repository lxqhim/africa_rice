import {User} from '../model/model.user';
import {Subscription} from 'rxjs';
import {ObjectsService} from '../service/objects.service';
import {AuthService} from '../service/auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Utilisateur} from '../model/model.utilisateur';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {



  userSubscription: Subscription;
  authSubscription: Subscription;
  constructor(private objService: ObjectsService,
              private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authSubscription = this.authService.authSubject.subscribe(
      (reponse: boolean) => {
        this.authService.isAuth = reponse;
        console.log(this.authService.isAuth);
      },
      (error) => {
        console.log('Erreur de chargement User' +  error);

      }
    );

    this.userSubscription = this.authService.userSubject.subscribe(
      (reponse: Utilisateur) => {
        this.authService.user = reponse;
       // console.log(this.authService.user);
      },
      (error) => {
        console.log('Erreur de chargement User' + error);

      }
    );
  }
  onSignIn() {
    console.log('Tentative de connexion' );
    this.router.navigate(['auth/signin']);
  }


  onSignOut() {
    console.log('Tentative de deconnexion' );
    this.authService.signOut(this.authService.user);
  }
}
