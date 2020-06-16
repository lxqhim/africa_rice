import { Component, OnInit } from '@angular/core';
import {InscriptionService} from "../service/inscription.service";
import {Utilisateurs} from "../model/modele.utilisateurs";


@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  private users;
  email:string;

  constructor(private service:InscriptionService) { }


  public deleteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>{
        this.users=data;
        console.log(data);
        alert('Suppression Réussie');
      },error=>{
        console.log(error);
        alert('Suppression echouée');
      }
    );
  }
  /* this.inscriptionservice.saveUtilisateur(this.utilisateur).
 subscribe(data => {
 console.log(data);
 alert('Inscription réussi');
}, error => {
 console.log(error);
 alert('Inscription echouée');
});*/

  public findUserByName(){
    let resp= this.service.getUserByNPE(this.email);
    resp.subscribe((data)=>this.users=data);
  }


  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
