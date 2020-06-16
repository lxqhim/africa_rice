import { Injectable } from '@angular/core';
import {Plantation} from '../model/model.plantation';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ParcelleService} from './parcelle.service';
import {Parcelle} from '../model/model.parcelle';

@Injectable({
  providedIn: 'root'
})
export class EditPlantationService {
  planid: number;
  parcelle: Parcelle;
  public plantationsURL = 'http://localhost:8080/plantations';


  constructor(private  httpClient: HttpClient, private parcelleService: ParcelleService) {
  }
  updatePlantation(plantation: Plantation): Observable<Plantation> {
    console.log('jjjjjjjjjjjj' + this.plantationsURL.concat('/') + this.planid);
    plantation.planID = this.planid;
    console.log(plantation);
    return this.httpClient.put<Plantation>(this.plantationsURL.concat('/') + this.planid, plantation);
  }

  getPlantationById(id: number) {
    this.planid = id;
    console.log(this.plantationsURL.concat('/') + id );
    return this.httpClient.get<Plantation>(this.plantationsURL.concat('/') + id);
  }
}
