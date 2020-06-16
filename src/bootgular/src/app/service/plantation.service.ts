import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ObjectsService} from './objects.service';
import {Plantation} from '../model/model.plantation';
import {Traitement} from "../model/model.traitement";
import {Parcelle} from "../model/model.parcelle";




@Injectable({
  providedIn: 'root'
})
export class PlantationService {

  public plantationsURL = 'http://localhost:8080/plantations';

  constructor(private  httpClient: HttpClient) {
  }
  getAllPlantations() {
    return this.httpClient.get<Plantation[]>(this.plantationsURL);
  }
 // getObjectByPlantation(id: string)  {
   // console.log('je suis arrivé au chaud !');
   // this.objectsService.getFoundObjectByPlantation(id);
 // }
  createPlantation(plan: Plantation): Observable<Plantation> {
    console.log(plan);
    return this.httpClient.post<Plantation>(this.plantationsURL.concat('/'), plan);
  }
}
