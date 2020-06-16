import { Component, OnInit } from '@angular/core';
import {InscriptionService} from '../service/inscription.service';
import {User} from '../model/model.user';
import {Utilisateur} from "../model/model.utilisateur";
import {Utilisateurs} from "../model/modele.utilisateurs";


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  /* acteurs: Acteur[] = [
      {id: 1, name: 'Administrateur'},
      {id: 2, name: 'Agronome'},
      {id: 3, name: 'Cultivateur'},
      {id: 4, name: 'Client'}
    ];*/
  utilisateur: Utilisateurs = new Utilisateurs();

  /*selectChangeHandler (event: any) {
    this.utilisateur.acteur= event.target.value;
  }*/


  constructor(public inscriptionservice: InscriptionService) {

  }

  ngOnInit() {
  }
  /*saveUtilisateur(){
    console.log(this.utilisateur);
    this.inscriptionservice.saveUtilisateur(this.utilisateur).
      subscribe(data=>{
        console.log(data);
    },error => {
      console.log(error);
    })
  }*/
  onFormSubmit({ value, valid}: { value: Utilisateurs, valid: boolean }) {
    this.utilisateur = value;
    console.log( this.utilisateur);
    console.log(' valid: ' + valid);
    console.log("email:"+this.utilisateur.email);
    this.inscriptionservice.saveUtilisateur(this.utilisateur).
    subscribe(data => {
      console.log(data);
      alert('Inscription réussi');
    }, error => {
      console.log(error);
      alert('Inscription echouée');
    });
  }

}
