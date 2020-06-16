
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../model/model.user';
import {Utilisateur} from "../model/model.utilisateur";
import {Utilisateurs} from "../model/modele.utilisateurs";
import {Parcelle} from "../model/model.parcelle";



@Injectable()
export class InscriptionService {
  public hostdeleteuser = 'http://localhost:8080/users/delete/';
  public hostsearcheuser = 'http://localhost:8080/users/findUser/';
  constructor(public http: HttpClient) {

  }



  public getUsers(){
    return this.http.get("http://localhost:8080/users");
  }
  saveUtilisateur( utilisateur: Utilisateurs) {
    return this.http.post('http://localhost:8080/users/create', utilisateur);
  }
  public deleteUser(id){
    return this.http.delete("http://localhost:8080/users/delete/"+id);
  }
  public getUserByNPE(search){
    return this.http.get(this.hostsearcheuser+search);
  }

  saveParcelle(parcelle : Parcelle) {
    return this.http.post('http://localhost:8080/parcelles/add',parcelle);


  }

  saveParcellePhoto(img: File) {
    const formData = new FormData();
    formData.append('file' ,img);
    return this.http.post('http://localhost:8080/parcelles/photoParcelle/upload',formData);

  }



}
