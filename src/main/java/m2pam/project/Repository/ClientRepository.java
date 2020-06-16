package m2pam.project.Repository;


import m2pam.project.Model.Acteur.Client;
import m2pam.project.Model.Acteur.Utilisateur;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends CrudRepository<Client,Long> {

}