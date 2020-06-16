import {Utilisateur} from '../model/model.utilisateur';
import {Plantation} from './model.plantation';

export class Traitement {
  date: Date;
  plantation: Plantation;
  operateur: Utilisateur;
  observation: string;
  critique: string;
  niveau: string;
  traitementID: number;

}
