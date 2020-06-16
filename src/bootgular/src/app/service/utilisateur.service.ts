import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Traitement} from '../model/model.traitement';
import {Observable} from 'rxjs';
import {Plantation} from "../model/model.plantation";
import {Utilisateur} from "../model/model.utilisateur";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  public URL = 'http://localhost:8080/users';
  constructor(private  httpClient: HttpClient, private header: AuthService) {
  }

  getAllUsers() {
    return this.httpClient.get<Utilisateur[]>(this.URL);
  }

  findUsersForRole() {
    let user = this.header.user.userID;
    return this.httpClient.get<Utilisateur[]>('http://localhost:8080/users/find/'+user);
  }

}
