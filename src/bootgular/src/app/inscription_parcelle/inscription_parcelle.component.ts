import { Component, OnInit } from '@angular/core';
import {Parcelle} from "../model/model.parcelle";
import {InscriptionService} from "../service/inscription.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-inscription-parcelle',
  templateUrl: './inscription_parcelle.component.html',
  styleUrls: ['./inscription_parcelle.component.css']
})
export class InscriptionParcelleComponent implements OnInit {
  imgFile:File;
  parcelle:Parcelle = new Parcelle();
  uploadForm: FormGroup;
  fileName:string;
  constructor(private inscriptionservice:InscriptionService,private formBuilder: FormBuilder, private http:HttpClient) {

  }
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      photo:[''],
      latitude:[''],
      longitude:[''],
      surface:[''],
      pente:[''],
      argile:[''],
      acidite:['']
    })
  }
  /*
  onFormSubmit({ value, valid}: { value: Parcelle, valid: boolean }) {
    this.parcelle = value;
    this.parcelle.photo = this.imgFile.name;
    console.log(this.imgFile.name);
    console.log("valid: " + valid);
    this.inscriptionservice.saveParcellePhoto(this.imgFile).subscribe();
    this.inscriptionservice.saveParcelle(this.parcelle).
    subscribe(data=>{
      console.log(data);
      alert("Inscription réussi");
    },error => {
      console.log(error);
      alert("Inscription echouée");
    })
  }
  */
  onFileSelect(event){
    if(event.target.files.length>0){
      this.imgFile = event.target.files[0];
      this.fileName = this.imgFile.name;
      this.uploadForm.get('photo').setValue(this.imgFile);
    }

  }




  onSubmit(){
    /*
    const formData = new FormData();
    formData.append('file' ,this.imgFile);
    this.http.post('http://localhost:8080/parcelles/photoParcelle/upload',formData).subscribe(res=>{
      console.log(res);
    })*/

    this.inscriptionservice.saveParcellePhoto(this.imgFile).subscribe(res=>{
      console.log(res);})
    this.parcelle.photo=this.fileName;
    this.inscriptionservice.saveParcelle(this.parcelle).
    subscribe(data=>{
      console.log(data);
      alert("Inscription réussi");
    },error => {
      console.log(error);
      alert("Inscription echouée");
    })
    /*
    formData1.append(('longitude'),this.uploadForm.get('longitude').value);
    formData1.append(('latitude'),this.uploadForm.get('latitude').value);
    formData1.append(('surface'),this.uploadForm.get('surface').value);
    formData1.append(('acidite'),this.uploadForm.get('acidite').value);
    formData1.append(('pente'),this.uploadForm.get('pente').value);
    formData1.append(('argile'),this.uploadForm.get('argile').value);*/
    //formData1.append(('photo'),this.fileName);

  }
}
