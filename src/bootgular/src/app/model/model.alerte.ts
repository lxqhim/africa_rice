import {Utilisateur} from "./model.utilisateur";

export class Alerte {
  date : Date;
  expediteur : Utilisateur;
  recepteur : Utilisateur;
  object : string;
  message : string;
}
