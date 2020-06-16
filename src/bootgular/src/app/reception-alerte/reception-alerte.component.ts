import { Component, OnInit } from '@angular/core';
import {AlerteService} from "../service/alerte.service";
import {AuthService} from "../service/auth.service";
import {Alerte} from "../model/model.alerte";

@Component({
  selector: 'app-reception-alerte',
  templateUrl: './reception-alerte.component.html',
  styleUrls: ['./reception-alerte.component.css']
})
export class ReceptionAlerteComponent implements OnInit {
  private alertes : Alerte[];
  constructor(private service: AlerteService, private http : AuthService) { }

  ngOnInit() {

    let resp=this.service.getAlerte(2);
    resp.subscribe((data)=> {this.alertes=data;console.log(data);});

  }

}
