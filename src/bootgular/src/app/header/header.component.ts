import { Component, OnInit } from '@angular/core';

import {Subscription} from 'rxjs';
import {ObjectsService} from '../service/objects.service';
import {AuthService} from '../service/auth.service';
import {VariablesGlobales} from '../VariablesGlobales';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Utilisateur} from '../model/model.utilisateur';
import {User} from '../model/model.user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = false;
  user: Utilisateur;

  userSubscription: Subscription;
  authSubscription: Subscription;
  constructor(private objService: ObjectsService, private authService: AuthService ) {}

  ngOnInit() {
    this.authSubscription = this.authService.authSubject.subscribe(
      (reponse: boolean) => {
        this.isAuth = reponse;
        console.log(this.isAuth);
      },
      (error) => {
        console.log('Erreur de chargement User' + error);

      }
    );

    this.userSubscription = this.authService.userSubject.subscribe(
      (reponse: Utilisateur) => {
        this.user = reponse;
        console.log(this.user + 'hhfhfhfhf');
      },
      (error) => {
        console.log('Erreur de chargement User' + error);

      }
    );

  }


}
