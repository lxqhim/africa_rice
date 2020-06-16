package m2pam.project.Model.Acteur;


import m2pam.project.Model.Coordonnee.Adresse;

import javax.persistence.*;

@Entity
public class Utilisateur {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    long userID;

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    /*cette  classe represente uniquement les clients internes */
    private String acteur; /* on lui attribue un type de l'énumeration  Role */
    private String nom;
    private String prenom;
    private String email;
    private String mdp;
    private String telephone;

    private String adresse;

    public Utilisateur() {
    }
    public Utilisateur(String acteur, String nom, String prenom, String motdepasse, String email, String telephone
            , String adresse) {
        this.acteur=acteur;
        this.nom=nom;
        this.email = email;
        this.prenom=prenom;
        this.mdp =motdepasse;
        this.telephone=telephone;
        this.adresse=adresse;
    }


    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String mail) {
        this.email = mail;
    }



    public String getMdp() {
        return mdp;
    }

    public void setMdp(String mot_de_passe) {
        this.mdp = mot_de_passe;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }




    public String getActeur() {
        return acteur;
    }

    public void setActeur(String acteur) {
        this.acteur = acteur;
    }

    @Override
    public String toString() {
        return "Utilisateur{" +
                "userID=" + userID +
                ", acteur='" + acteur + '\'' +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", mail='" + email + '\'' +
                ", mot_de_passe='" + mdp + '\'' +
                ", telephone='" + telephone + '\'' +
                ", adresse='" + adresse + '\'' +
                '}';
    }
}
