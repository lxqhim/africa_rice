import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PlantationService} from '../service/plantation.service';
import {Plantation} from '../model/model.plantation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plantation',
  templateUrl: './plantation.component.html',
  styleUrls: ['./plantation.component.css']
})
export class PlantationComponent implements OnInit {
  plantations: Plantation[];
  constructor(private router: Router, private plantationService: PlantationService) { }

  ngOnInit() {
    this.plantationService.getAllPlantations().subscribe( data => {
      this.plantations = data;
    });
  }
 // getObjectByPlantationId(id: string)  {
   // this.plantationService.getObjectByPlantation(id);
 // }
  editPlan(plan: Plantation): void {
    window.localStorage.removeItem('editPlanId');
    window.localStorage.setItem('editPlanId', plan.planID.toString());
    this.router.navigate(['editPlan']);
  }
  addPlan() {
    this.router.navigate(['AddPlan']);
  }
}
