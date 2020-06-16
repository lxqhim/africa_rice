import { Component, OnInit } from '@angular/core';
import {Plantation} from '../model/model.plantation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {EditPlantationService} from '../service/edit-plantation.service';
import {Parcelle} from '../model/model.parcelle';
import {ParcelleService} from '../service/parcelle.service';
import {Utilisateur} from '../model/model.utilisateur';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-edit-plantation',
  templateUrl: './edit-plantation.component.html',
  styleUrls: ['./edit-plantation.component.css']
})
export class EditPlantationComponent implements OnInit {
  plantation: Plantation;
  parcelles: Parcelle[];
  users: Utilisateur[];
  public plantationsURL = 'http://localhost:8080/plantations';

  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private editplantationService: EditPlantationService,
              private parcelleService: ParcelleService) {
  }

  ngOnInit() {
    this.parcelleService.getRessourceusers().subscribe( data => {
      this.users = data;
     // console.log(this.users + 'users');
    }),
      // tslint:disable-next-line:no-unused-expression
      (error) => {
        console.log('Erreur de chargement users' + error);

      };
    this.parcelleService.getRessourceb().subscribe( data => {
      this.parcelles = data;
      // console.log(this.parcelles + 'parcelles');
    }),
      // tslint:disable-next-line:no-unused-expression
      (error) => {
        console.log('Erreur de chargement parcelles' + error);

      };
    const planId = window.localStorage.getItem('editPlanId');
    if (!planId) {
      alert('Invalid action.');
      this.router.navigate(['plantations']);
      return;
    } else {
      this.editplantationService.getPlantationById(+planId).subscribe( data => {
      });
    }


    this.editForm = this.formBuilder.group({
      id: [''],
      nom: ['', Validators.required],
      proprietaire: ['', Validators.required],
      etat: ['', Validators.required],
      parcelle: ['', Validators.required],
      datefin: ['', Validators.required]
    });
  }

  onSubmit() {
    this.editplantationService.updatePlantation(this.editForm.value).
    pipe(first())
      .subscribe(
        data => {
            alert('plantation updated successfully.');
            this.router.navigate(['plantations']);
        },
        error => {
          alert(error);
        });
  }


}
