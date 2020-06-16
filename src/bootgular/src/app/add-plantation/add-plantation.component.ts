
import { Component, OnInit } from '@angular/core';
import {Plantation} from '../model/model.plantation';
import {Parcelle} from '../model/model.parcelle';
import {Utilisateur} from '../model/model.utilisateur';
import {Router} from '@angular/router';
import {EditPlantationService} from '../service/edit-plantation.service';
import {ParcelleService} from '../service/parcelle.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddTraitementServiceService} from '../service/add-traitement-service.service';
import {PlantationService} from '../service/plantation.service';
import {TraitementService} from '../service/traitement.service';
import {Traitement} from '../model/model.traitement';
import {first} from 'rxjs/operators';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-add-plantation',
  templateUrl: './add-plantation.component.html',
  styleUrls: ['./add-plantation.component.css']
})
export class AddPlantationComponent implements OnInit {
  error: string;
  plan: Plantation;
  parcelles: Parcelle[];
  users: Utilisateur[];
  usertorecover: Utilisateur;
  parcelletorecover: Parcelle;
  plantation: Plantation;
  uploadResponse = { status: '', message: '', filePath: '' };
  constructor(private Http: HttpClient, private router: Router, private plantationService: PlantationService,
              private parcelleService: ParcelleService,
              private formBuilder: FormBuilder, private traitementService: TraitementService) { }
  uploadForm: FormGroup;
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      nom: ['', Validators.required],
      etat: ['', Validators.required],
      parcelle: ['', Validators.required],
      proprietaire: ['', Validators.required],
      photo: ['', Validators.required],
    });
    this.parcelleService.getRessourceb().subscribe( data => {
      this.parcelles = data;
      console.log(this.parcelles + 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
      // console.log(this.users + 'users');
    }),
      // tslint:disable-next-line:no-unused-expression
      (error) => {
        console.log('Erreur de chargement users' + error);

      };
    this.parcelleService.getRessourceusers().subscribe( data => {
      this.users = data;
      // console.log(this.users + 'users');
    }),
      // tslint:disable-next-line:no-unused-expression
      (error) => {
        console.log('Erreur de chargement users' + error);

      };
  }



  onSubmit() {
    console.log('je suis entré uuuuuuuuuuuuuuuu');
    this.uploadForm.value.proprietaire = this.usertorecover;
    this.uploadForm.value.parcelle = this.parcelletorecover;
    console.log(this.uploadForm.value);
    this.plantationService.createPlantation(this.uploadForm.value).
    pipe(first())
      .subscribe(
        data => {
          alert('plantation added successfylly.');
          this.router.navigate(['plantations']);
        },
        error => {
          alert(error + 'iciciciciic');
          console.log('Erreur de chargement des plantations hhhhhhhhhh' + error);

        });
  }
}

