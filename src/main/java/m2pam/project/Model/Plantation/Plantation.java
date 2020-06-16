package m2pam.project.Model.Plantation;

import m2pam.project.Model.Acteur.Utilisateur;
import m2pam.project.Model.Parcelle.Parcelle;

import javax.persistence.*;
import java.text.DateFormat;
import java.util.Date;

@Entity
public class Plantation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long planID;


    private String nom;
    private String etat;

    @OneToOne
    private Parcelle parcelle;
    @OneToOne
    private Utilisateur proprietaire;


    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    private String photo;

    public Plantation() {
    }

    public Plantation(String nom, Parcelle parcelle, Utilisateur proprietaire, String photo) {
        Date aujourdhui = new Date();
        DateFormat shortDateFormat = DateFormat.getDateTimeInstance(
                DateFormat.SHORT,
                DateFormat.SHORT);
        this.nom = nom;
        this.parcelle = parcelle;
        this.proprietaire = proprietaire;
        this.etat = "debut";
        this.photo =photo;
    }

    public long getPlanID() {
        return planID;
    }

    public void setPlanID(long plantationId) {
        this.planID = plantationId;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public Parcelle getParcelle() {
        return parcelle;
    }

    public void setParcelle(Parcelle parcelle) {
        this.parcelle = parcelle;
    }

    public Utilisateur getProprietaire() {
        return proprietaire;
    }

    public void setProprietaire(Utilisateur proprietaire) {
        this.proprietaire = proprietaire;
    }

}
