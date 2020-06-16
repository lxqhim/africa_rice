import {Adresse} from './model.Adresse';

export class User {

  constructor(
    public userID: number,
    public acteur: string,
    public nom: string,
    public prenom: string,
    public email: string,
    public mdp: string,
    public phoneNumber: string,
    public adresse: string,
  ) {}
}
