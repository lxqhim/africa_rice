package m2pam.project.Repository;

import m2pam.project.Model.Acteur.Utilisateur;
import m2pam.project.Model.Plantation.Plantation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlantationRepository extends CrudRepository<Plantation, Long> {
    @Query("SELECT p FROM Plantation p WHERE p.etat LIKE CONCAT('%',:search,'%') OR p.parcelle.photo LIKE CONCAT('%',:search,'%')" +
            "OR p.nom LIKE CONCAT('%',:search,'%') OR p.proprietaire.email LIKE CONCAT('%',:search,'%')"
            +"OR p.proprietaire.nom LIKE CONCAT('%',:search,'%') OR p.proprietaire.acteur LIKE CONCAT('%',:search,'%')"
            +"OR p.proprietaire.adresse LIKE CONCAT('%',:search,'%') OR p.photo LIKE CONCAT('%',:search,'%')")
    List<Plantation> findPlantations(@Param("search") String search);

}
