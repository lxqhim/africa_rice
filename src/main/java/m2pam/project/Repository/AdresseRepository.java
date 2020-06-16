package m2pam.project.Repository;

import m2pam.project.Model.Coordonnee.Adresse;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdresseRepository extends CrudRepository<Adresse,Long> {
}
