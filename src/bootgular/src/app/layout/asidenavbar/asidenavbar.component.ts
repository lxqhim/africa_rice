import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss']
})
export class AsidenavbarComponent implements OnInit {
  private admin;
  private client;
  private cultivateur;
  private agronome;
  constructor(private user: AuthService, private route: Router) { }

  ngOnInit() {
  }

  /*
  plantation() {
   this.variable.partieplantation = true;
   this.variable.partieutilisateur = false;
   this.variable.partieparcelle = false;


  }
  parcelle() {
    this.variable.partieplantation = false;
    this.variable.partieutilisateur = false;
    this.variable.partieparcelle = true;
  }
  utilisateur() {
    this.variable.partieplantation = false;
    this.variable.partieutilisateur = true;
    this.variable.partieparcelle = false;
  }
*/
  role() {
    switch (this.user.user.acteur) {
      case "administrateur" :
        this.admin = true;
        this.client = false;
        this.cultivateur = false;
        this.agronome = false;
        break;

      case "client" :
        this.admin = false;
        this.client = true;
        this.cultivateur = false;
        this.agronome = false;
        break;
      case "culvivateur" :
        this.admin = false;
        this.client = false;
        this.cultivateur = true;
        this.agronome = false;
        break;
      case "agronome" :
        this.admin = false;
        this.client = false;
        this.cultivateur = false;
        this.agronome = true;
        break;
    }


  }
}
