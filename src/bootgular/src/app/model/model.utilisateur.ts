import {Adresse} from './model.Adresse';

export class Utilisateur {


  constructor(
    public userID: string,
    public acteur: string,
    public nom: string,
    public prenom: string,
    public email: string,
    public mdp: string,
    public phoneNumber: string,
    public adresse: string,
  ) {}
}
