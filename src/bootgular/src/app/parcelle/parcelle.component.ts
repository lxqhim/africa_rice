import { Component, OnInit } from '@angular/core';
import {ParcelleService} from '../service/parcelle.service';

@Component({
  selector: 'app-parcelle',
  templateUrl: './parcelle.component.html',
  styleUrls: ['./parcelle.component.scss']
})
export class ParcelleComponent implements OnInit {
  private parcelles;

  constructor(private parcelleService: ParcelleService) { }

  ngOnInit() {
    this.getParcelles();
  }

  private getParcelles() {
    this.parcelleService.getRessource('/parcelles').subscribe(data => {
      this.parcelles = data; }, err => {
      console.log(err);
    });
  }

  private deleteParcelle(id : number){
    console.log("ggggggg");
    this.parcelleService.delete(id).subscribe((err) => console.log(err));
    console.log("ddddddd");
  }
}
