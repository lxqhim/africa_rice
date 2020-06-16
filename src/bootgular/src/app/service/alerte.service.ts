import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Alerte} from "../model/model.alerte";
import {Traitement} from "../model/model.traitement";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlerteService {

  public alertesURL = 'http://localhost:8080/alertes';
  constructor(private  httpClient: HttpClient) {
  }

  getAllAlertes() {
    return this.httpClient.get<Alerte[]>(this.alertesURL);
  }

  getAlerte(id) {
    return this.httpClient.get<Alerte[]>(this.alertesURL.concat("/")+id);
  }

  addAlerte(alerte: Alerte):Observable<Alerte>{
    return this.httpClient.post<Alerte>("http://localhost:8080/alertes/add",alerte);
  }




}
