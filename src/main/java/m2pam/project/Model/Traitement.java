package m2pam.project.Model;

import m2pam.project.Model.Acteur.Utilisateur;
import m2pam.project.Model.Parcelle.Parcelle;
import m2pam.project.Model.Plantation.Plantation;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Traitement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long TraitementID;

    Date date = new Date();

    @ManyToOne
    private Plantation plantation;
    @OneToOne
    private Utilisateur operateur;

    String observation ;
    String critique;
    String niveau;


    public Traitement() {
    }
    public Traitement(Date date, Plantation plantation, Utilisateur operateur,String observation,String critique, String niveau) {
    this.date = date;
    this.plantation = plantation;
    this.operateur = operateur;
    this.observation = observation;
    this.critique = critique;
    this.niveau = niveau;
    }

    public long getTraitementID() {
        return TraitementID;
    }

    public void setTraitementID(long traitementID) {
        TraitementID = traitementID;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Plantation getPlantation() {
        return plantation;
    }

    public void setPlantation(Plantation plantation) {
        this.plantation = plantation;
    }

    public Utilisateur getOperateur() {
        return operateur;
    }

    public void setOperateur(Utilisateur operateur) {
        this.operateur = operateur;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }

    public String getCritique() {
        return critique;
    }

    public void setCritique(String critique) {
        this.critique = critique;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }
}
