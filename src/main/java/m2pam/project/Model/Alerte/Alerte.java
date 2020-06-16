package m2pam.project.Model.Alerte;

import m2pam.project.Model.Acteur.Utilisateur;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Alerte {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    long alerteID;

    Date date = new Date();
    private String object;
    private String message;

    @ManyToOne
    private Utilisateur expediteur;

    @ManyToOne
    private Utilisateur recepteur;

    public Alerte(){}

    public Alerte(Date date, String object, String message, Utilisateur expediteur, Utilisateur recepteur){
        this.date = date;
        this.object = object;
        this.message = message;
        this.expediteur = expediteur;
        this.recepteur = recepteur;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getObject() {
        return object;
    }

    public void setObject(String object) {
        this.object = object;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Utilisateur getExpediteur() {
        return expediteur;
    }

    public void setExpediteur(Utilisateur expediteur) {
        this.expediteur = expediteur;
    }

    public Utilisateur getRecepteur() {
        return recepteur;
    }

    public void setRecepteur(Utilisateur recepteur) {
        this.recepteur = recepteur;
    }
}
