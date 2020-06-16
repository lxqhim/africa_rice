package m2pam.project.Service;

import m2pam.project.Model.Parcelle.Parcelle;
import m2pam.project.Repository.ParcelleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ParcelleService implements IParcelleService{
    @Autowired
    ParcelleRepository parcelleRepository;


    @Override
    public List<Parcelle> getAllParcelles() {
        List<Parcelle> list = new ArrayList<>();
        parcelleRepository.findAll().forEach(parcelle -> list.add(parcelle));
        return list;
    }

    @Override
    public void addParcelle(Parcelle parcelle) {
        parcelleRepository.save(parcelle);

    }

    @Override
    public void updateParcelle(Parcelle parcelle) {
        parcelleRepository.save(parcelle);
    }

    @Override
    public Parcelle findParcelleByID(long id) {
        Parcelle parcelle = parcelleRepository.findOne(id);
        return parcelle;
    }

    @Override
    public boolean exists(Parcelle parcelle) {
        return (findParcelleByID(parcelle.getPacelleId()) != null);
    }

    @Override
    public void deleteParcelle(Parcelle parcelle) {
        parcelleRepository.delete(parcelle);
    }

    @Override
    public Parcelle getParcelleBylongLati(String longi, String lati) {
        return parcelleRepository.getParcelleBylongLati(longi,lati);
    }
}
