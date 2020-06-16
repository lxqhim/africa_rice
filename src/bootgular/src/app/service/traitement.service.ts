import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Traitement} from '../model/model.traitement';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {

  public URL = 'http://localhost:8080/traitements';
  constructor(private  httpClient: HttpClient) {
  }
  getAllTraitements() {
    return this.httpClient.get<Traitement[]>(this.URL);
  }
  createTraitement(tr: Traitement): Observable<Traitement> {

    console.log(tr);
    return this.httpClient.post<Traitement>(this.URL.concat('/'), tr);
  }
}
