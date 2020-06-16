package m2pam.project.Repository;


import m2pam.project.Model.Acteur.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UtilisateurRepository extends CrudRepository<Utilisateur,Long> {
  @Query("SELECT u FROM Utilisateur u WHERE u.nom LIKE CONCAT('%',:search,'%') OR u.prenom LIKE CONCAT('%',:search,'%')" +
          "OR u.acteur LIKE CONCAT('%',:search,'%') OR u.email LIKE CONCAT('%',:search,'%')")
  List<Utilisateur> findUsers(@Param("search") String search);
  List<Utilisateur> findByNomOrPrenomOrActeurOrEmail(String mc,String p,String act,String em);
  Utilisateur findByEmail(String mail);
  @Query("SELECT u FROM Utilisateur u WHERE u.email = :mail AND u.mdp = :mdp ")
  Utilisateur getUserByEmailMDP(@Param("mail") String mail,@Param("mdp") String mdp);
 // Utilisateur getUserByMDP(String mdp);

}
