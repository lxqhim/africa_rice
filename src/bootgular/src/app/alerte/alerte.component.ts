import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Utilisateur} from "../model/model.utilisateur";
import {InscriptionService} from "../service/inscription.service";
import {UtilisateurService} from "../service/utilisateur.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PlantationService} from "../service/plantation.service";
import {ParcelleService} from "../service/parcelle.service";
import {TraitementService} from "../service/traitement.service";
import {AuthService} from "../service/auth.service";
import {AlerteService} from "../service/alerte.service";
import {Alerte} from "../model/model.alerte";
import {Parcelle} from "../model/model.parcelle";

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.css']
})
export class AlerteComponent implements OnInit {
  alerteForm = false;
  uploadForm: FormGroup;
  utilisateurs : Utilisateur[];
  recepteur : Utilisateur;
  user : Utilisateur;
  alert : Alerte = new Alerte();

  constructor(private Http: HttpClient,private router: Router,private alerteService : AlerteService, private utilisateurService : UtilisateurService, private header: AuthService,private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      recepteur: ['', Validators.required],
      object: ['', Validators.required],
      message: ['', Validators.required],
    });
    this.utilisateurService.findUsersForRole().subscribe( data => {
      this.utilisateurs = data;
      this.user = this.header.user;
      // console.log(this.users + 'users');
    }),
      // tslint:disable-next-line:no-unused-expression
      (error) => {
        console.log('Erreur de chargement users' + error);

      };
  }




  onSubmit() {
    console.log("user connected:"+this.header.user.nom);
    this.alert.expediteur = this.header.user;
    console.log("expediteur:"+this.alert.expediteur);
    //this.uploadForm.expediteur=
    this.alert.date = new Date();
    console.log( this.alert);

    this.alerteService.addAlerte(this.alert)
      .subscribe(
        data => {
          console.log(data);
          alert('Alerte sent successfully.');
          //this.router.navigate(['traitements']);
        },
        error => {
          alert(error);
        });
  }





}
