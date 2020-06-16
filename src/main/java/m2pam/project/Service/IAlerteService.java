package m2pam.project.Service;

import m2pam.project.Model.Acteur.Client;
import m2pam.project.Model.Alerte.Alerte;

import java.util.List;

public interface IAlerteService {
    public List<Alerte> getAllAlerte();
    public void addAlerte(Alerte alerte);
    public List<Alerte> findAlertesById(long ID);

}
