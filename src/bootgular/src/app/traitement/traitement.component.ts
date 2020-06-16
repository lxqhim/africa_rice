import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Traitement} from '../model/model.traitement';
import {TraitementService} from '../service/traitement.service';
import {HeaderComponent} from '../header/header.component';
import {Utilisateur} from '../model/model.utilisateur';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit {
  tableau: Traitement[];
  user: Utilisateur;
  constructor(private router: Router, private traitementService: TraitementService, private header: AuthService) { }

  ngOnInit() {
    this.traitementService.getAllTraitements().subscribe( data => {
      this.tableau = data;
      this.user = this.header.user;
    });
  }

  editTraitement(plan: Traitement): void {
    window.localStorage.removeItem('editPlanId');
    window.localStorage.setItem('editPlanId', plan.traitementID.toString());
    this.router.navigate(['editPlan']);
  }

  addTraitement() {
    this.router.navigate(['Addtraitement']);

  }
}

