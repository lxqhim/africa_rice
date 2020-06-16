package m2pam.project.Model.Parcelle;

import javax.persistence.*;

@Entity
public class Parcelle {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long pclID;

    //long photoId;
    private double surface;
    private double acidite;
    private double pente;
    private boolean argile;
    private String longitude;
    private String latitude;
    private String photo;



    /*
    public Adresse getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
    */
    public Parcelle(double surface, double acidite, double pente, boolean argile, String longitude, String latitude, String photo) {
        this.surface = surface;
        this.acidite = acidite;
        this.pente = pente;
        this.argile = argile;
        this.longitude = longitude;
        this.latitude = latitude;
        this.photo= photo;
        //this.photoId=this.parcelleId;
    }

    public Parcelle() {

    }
   /* public void  setPhotoId(long a){
        this.photoId=a;
    }*/
    public long getPacelleId() {return pclID;}
    //public long getPhotoId() {return photoId;}
    public double getSurface() {
        return surface;
    }
    public String getPhoto() {
        return photo;
    }
    public void setSurface(double surface) {
        this.surface = surface;
    }
    public void setPhoto(String photo) {
        this.photo = photo;
    }
    public void setAcidite(double acidite) {
        this.acidite = acidite;
    }

    public void setPente(double pente) {
        this.pente = pente;
    }

    public void setArgile(boolean argile) {
        this.argile = argile;
    }

    public double getAcidite() {
        return acidite;
    }

    public double getPente() {
        return pente;
    }

    public boolean isArgile() {
        return argile;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }
}
