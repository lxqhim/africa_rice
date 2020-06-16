package m2pam.project.Service;

import m2pam.project.Model.Plantation.Plantation;
import m2pam.project.Model.Traitement;

import java.util.List;

public interface ITraitementService {
    public List<Traitement> getAll();
    public void add(Traitement traitement);
    public void update(Traitement traitement);
    public Traitement findTraitementByID(long id);
    public boolean exists(Traitement traitement);
    public void delete(Traitement traitement);

}
