package m2pam.project.Repository;

import m2pam.project.Model.Traitement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TraitementRepository extends CrudRepository<Traitement, Long> {
}
