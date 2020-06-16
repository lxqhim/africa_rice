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
  selector: 'app-add-traitement',
  templateUrl: './add-traitement.component.html',
  styleUrls: ['./add-traitement.component.css']
})
export class AddTraitementComponent implements OnInit {
  error: string;
  plantation: Plantation[];
  parcelles: Parcelle[];
  users: Utilisateur[];
  plantorecover: Plantation;
  uploadResponse = { status: '', message: '', filePath: '' };
  constructor(private Http: HttpClient, private router: Router, private plantationService: PlantationService,
              private parcelleService: ParcelleService,
              private formBuilder: FormBuilder, private traitementService: TraitementService,  private header: AuthService) { }
  uploadForm: FormGroup;
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      d: ['', Validators.required],
      plantation: ['', Validators.required],
      observation: ['', Validators.required],
      critique: ['', Validators.required],
      niveau: ['', Validators.required],
    });
    this.parcelleService.getRessourceusers().subscribe( data => {
      this.users = data;
      // console.log(this.users + 'users');
    }),
      // tslint:disable-next-line:no-unused-expression
      (error) => {
        console.log('Erreur de chargement users' + error);

      };
    this.plantationService.getAllPlantations().subscribe( data => {
      this.plantation = data;
      // console.log(this.users + 'users');
    }),
      // tslint:disable-next-line:no-unused-expression
      (error) => {
        console.log('Erreur de chargement des plantations' + error);

      };
  }

  onSubmit() {
    this.uploadForm.value.operateur = this.header.user;
    this.uploadForm.value.plantation = this.plantorecover;
    console.log(this.uploadForm.value);
    this.traitementService.createTraitement(this.uploadForm.value).
      pipe(first())
      .subscribe(
        data => {
          alert('traitement updated successfylly.');
          this.router.navigate(['traitements']);
        },
          error => {
          alert(error);
        });
  }
}
