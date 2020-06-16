
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Parcelle} from '../model/model.parcelle';
import {Utilisateur} from '../model/model.utilisateur';


@Injectable()
export class ParcelleService {
  public host = 'http://localhost:8080/';
  public hostb = 'http://localhost:8080/parcelles';
  public hostuser = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {

  }
    public getRessource(url) {
    return this.http.get<Parcelle[]>(this.host + url);
  }
  public getRessourceb() {
    return this.http.get<Parcelle[]>(this.hostb);
  }
  public getRessourcebyID(ident) {
    return this.http.get<Parcelle>(this.hostb + '/' + ident);
  }

  public getRessourceusers() {
    return this.http.get<Utilisateur[]>(this.hostuser);
  }
  public delete(id) {
    return this.http.get( "http://localhost:8080/parcelles/delete/"+id);
  }

  public findParcelles(lon, lat) {
  return this.http.get("http://localhost:8080/parcelles/"+lon+'/'+lat);
}

}
