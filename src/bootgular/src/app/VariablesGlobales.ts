import { Injectable } from '@angular/core';
import {User} from './model/model.user';
@Injectable()
export class VariablesGlobales {
  public isAuth = false;
  public authStatus = false;

  public user: User;

}
