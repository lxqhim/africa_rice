import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Subject} from 'rxjs';
import {User} from '../model/model.user';
import {VariablesGlobales} from '../VariablesGlobales';
import {Router} from '@angular/router';
import {Utilisateur} from '../model/model.utilisateur';
@Injectable()
export class AuthService {
    isAuth = false;

    user: Utilisateur;
    authSubject = new Subject<boolean>();
    userSubject = new Subject<Utilisateur>();
    requestUrl;
    constructor(private http: HttpClient, private router: Router) {
    }
    private signinRequest = 'http://localhost:8080/users/connexion/';
    private signupRequestUrl = 'http://localhost:8080/users/';

    emitUserSubject() {
         this.authSubject.next(this.isAuth);
         this.userSubject.next(this.user);
    }

    signIn(user: Utilisateur) {
        this.user = user;
      //  console.log(user.email);
        // console.log(user.mdp + '  ici ' + this.user);
        this.requestUrl = this.signinRequest.concat(user.email).concat('/').concat(user.mdp);
        console.log(this.requestUrl);
        this.http.get<Utilisateur>(this.requestUrl)
            .subscribe(
                (reponse) => {
                    // this.variables.user = reponse;
                    this.user = reponse;
                    // console.log(reponse.acteur + 'reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
                    this.isAuth = true;
                    this.emitUserSubject();
                    this.router.navigate(['acceuil']);
                },
                (error) => {
                    // console.log('Erreur de chargement User' + error);
                    // this.variables.isAuth = false;
                    this.isAuth = false;
                    // this.variables.authStatus = false;
                    this.emitUserSubject();
                    alert('mail ou mot de passe incorrect !');

                }
            );
        // console.log(this.isAuth + 'jjjjjjjjjjjjjjjjjj');
        // this.router.navigate(['/']);

    }

  signOut(user: Utilisateur) {

    // console.log(user.email);
    // console.log(user.mdp + '  ici ');
    this.requestUrl = this.signinRequest.concat(user.email).concat('/').concat(user.mdp);
    console.log(this.requestUrl);
    this.http.get<Utilisateur>(this.requestUrl)
      .subscribe(
        (reponse) => {
          // console.log(this.user + 'kakakakaka');
         // this.variables.isAuth = false;
          this.isAuth = false;
          this.emitUserSubject();

        },
        (error) => {
          console.log('Erreur de chargement User' + error);
          // this.variables.isAuth = false;
          this.isAuth = false;
          // this.variables.authStatus = false;
          this.emitUserSubject();
        }
      );


  }

  public signUp(user) {
  }
}
