package m2pam.project.Service;

import m2pam.project.Model.Parcelle.Parcelle;

import java.util.List;

public interface IParcelleService {
    public List<Parcelle> getAllParcelles();
    public void addParcelle(Parcelle parcelle);
    public void updateParcelle(Parcelle parcelle);
    public Parcelle findParcelleByID(long id);
    public boolean exists(Parcelle parcelle);
    public void deleteParcelle(Parcelle parcelle);
    public Parcelle getParcelleBylongLati(String longi, String lati);
}
