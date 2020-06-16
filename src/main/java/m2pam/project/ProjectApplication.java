package m2pam.project;

import m2pam.project.Model.Acteur.Utilisateur;
import m2pam.project.Model.Alerte.Alerte;
import m2pam.project.Model.Parcelle.Parcelle;
import m2pam.project.Model.Plantation.Plantation;
import m2pam.project.Model.Traitement;
import m2pam.project.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;
import m2pam.project.Model.Coordonnee.Adresse;
import java.util.Date;

@SpringBootApplication(scanBasePackages = {"m2pam"} )
@ImportResource(value = "classpath:spring/application-config.xml")
public class ProjectApplication implements CommandLineRunner {
    @Autowired
    private UtilisateurRepository user;

    @Autowired
    private AdresseRepository addrs;

    @Autowired
    private ParcelleRepository parcelles;

    @Autowired
    private PlantationRepository plantations;


    @Autowired
    private TraitementRepository tableau;

    @Autowired
    private AlerteRespository alertes;

    public static void main(String[] args) {
        SpringApplication.run(ProjectApplication.class, args);

    }
    @Override
    public void run(String... arg0) throws Exception{
        Adresse addr1 = new Adresse("1","Grand Rue","25000","Besancon");
        Adresse addr2 = new Adresse("2","Grand Rue","25000","Besancon");
        Adresse addr3 = new Adresse("3","Grand Rue","25000","Besancon");
        addrs.save(addr1);
        addrs.save(addr2);
        addrs.save(addr3);

        Utilisateur user1 = new Utilisateur("administrateur","Joel","Loba","actor","Joel@gmail.com","0957535786","38 rue lanchy besancon 25000");
        Utilisateur user2 = new Utilisateur("agronome","Li","Bruce","actor","bruce@gmail.com","0637527980","38 rue Pasteur Reims 51000");
        Utilisateur user3 = new Utilisateur("client","Macalou","Mady","actor","mady@gmail.com","0327537856","38 rue Chopin besancon 25000");

        user.save(user1);
        user.save(user2);
        user.save(user3);
        ///user.findAll().forEach(c->{System.out.println(c.getNom());});

        Parcelle parcelle1 = new Parcelle(2789.89,16.1,1.71,false, "40N","20E","parcelleSample.jpeg");
        Parcelle parcelle2 = new Parcelle(3332.89,27.1,0.71,false, "40N","20E","parcellesdff.jpg");
        Parcelle parcelle3 = new Parcelle(1234.89,56.1,5.71,false, "40N","20E","parcellebb.jpg");
        //parcelle.setPhotoId(parcelle.getPacelleId());
        parcelles.save(parcelle1);
        parcelles.save(parcelle2);
        parcelles.save(parcelle3);

        Plantation pl1 = new Plantation("riz 1",parcelle1,user1, "photo 1");
        Plantation pl2 = new Plantation("riz 2",parcelle3,user2, "photo 2");
        Plantation pl3 = new Plantation("riz 3",parcelle2,user3, "photo 3");
        plantations.save(pl1);
        plantations.save(pl2);
        plantations.save(pl3);

        Traitement tr1 = new Traitement(new Date(), pl1, user1," je vais cette plantattion ","pas assez de jihvjfjvo","cultivativation de riz ") ;
        Traitement tr2 = new Traitement(new Date(), pl2, user2," je vais cette plantattion pojefvj ","pas assez de jihvjfjvo","cultivativation de riz 2") ;
        tableau.save(tr1);
        tableau.save(tr2);

        Alerte alerte1 = new Alerte(new Date(),"object msg1","this is the content of msg1",user1,user2);
        Alerte alerte2 = new Alerte(new Date(),"object msg1","this is the content of msg1",user2,user3);
        alertes.save(alerte1);
        alertes.save(alerte2);

    }
}
