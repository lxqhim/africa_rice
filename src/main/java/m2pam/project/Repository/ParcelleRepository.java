package m2pam.project.Repository;

import m2pam.project.Model.Acteur.Utilisateur;
import m2pam.project.Model.Parcelle.Parcelle;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ParcelleRepository extends CrudRepository<Parcelle, Long> {
    @Query("SELECT u FROM Parcelle u WHERE u.longitude = :mail AND u.latitude = :mdp ")
    Parcelle getParcelleBylongLati(@Param("mail") String mail, @Param("mdp") String mdp);

}
