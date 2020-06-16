import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddTraitementServiceService {
  SERVER_URL = 'http://localhost:4200/auth';
  constructor(private httpClient: HttpClient) { }

  public upload(data) {
    console.log(data);
    const uploadURL = `${this.SERVER_URL}`;

    return this.httpClient.post(uploadURL, data).subscribe(res => {
      console.log(res);
      alert('succes !');
    });
  }
}
