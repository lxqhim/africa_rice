import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlantationComponent} from '../../plantation/plantation.component';
import {Plantation} from '../../model/model.plantation';
import {PlantationService} from '../../service/plantation.service';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  plantation: Plantation[];
  constructor(private plantations: PlantationService, private header: AuthService) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.plantations.getAllPlantations().subscribe( data => {
      this.plantation = data;
    });
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
