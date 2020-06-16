import {User} from './model.user';
import {Parcelle} from './model.parcelle';
import {Utilisateur} from './model.utilisateur';

export class Plantation {
  planID: number;
  nom: string;
  etat: string;
  parcelle: Parcelle;
  proprietaire: Utilisateur;
  photo: string;
  }
