import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Objects} from '../model/object.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  urlBase =  'http://localhost:8080/';
  urlBaseFound: string = this.urlBase.concat('plantations/');
  requestUrl: string ;
  private objectsFound: Objects[];


  objFoundSubject = new Subject<Objects[]>();

  constructor(private httpClient: HttpClient) {
      this.getFoundObject();
  }

  emitFoundObjects() {
    this.objFoundSubject.next(this.objectsFound);
  }

  getFoundObject() {
    this.requestUrl = this.urlBaseFound;
    this.httpClient.get<any[]>(this.requestUrl)
      .subscribe(
        (reponse) => {
          this.objectsFound = reponse;
          console.log(this.objectsFound);
          this.emitFoundObjects();

        },
        (error) => {
          console.log('Erreur de chargement des objets trouvees' + error);
        }
      );
  }
  getFoundObjectByPlantation(id: string)  {
      this.requestUrl = this.urlBaseFound.concat('plantations/').concat(id);
      this.httpClient.get<any[]>(this.requestUrl)
          .subscribe(
              (reponse) => {
                  this.objectsFound = reponse;
                  this.emitFoundObjects();

              },
              (error) => {
                  console.log('Erreur de chargement des objets trouvees' + error);
              }
          );
  }



}
//
