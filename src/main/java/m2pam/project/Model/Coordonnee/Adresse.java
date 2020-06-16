package m2pam.project.Model.Coordonnee;

import m2pam.project.Model.Parcelle.Parcelle;

import javax.persistence.*;

@Entity
public class Adresse {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    long adresseID;

    private String rue;
    private String numero;
    private String commune;
    private String codePostal;



    public Adresse() {};

    public Adresse(String numero, String rue, String codePostal, String commune) {
        this.rue = rue;
        this.numero = numero;
        this.commune = commune;
        this.codePostal = codePostal;
    }

    public void setRue(String rue) {
        this.rue = rue;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public void setCommune(String commune) {
        this.commune = commune;
    }

    public void setCodePostal(String codePostal) {
        this.codePostal = codePostal;
    }

    public String getRue() {
        return rue;
    }

    public String getNumero() {
        return numero;
    }

    public String getCommune() {
        return commune;
    }

    public String getCodePostal() {
        return codePostal;
    }

    public long getAdresseID() {
        return adresseID;
    }
}
