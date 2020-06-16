package m2pam.project.Service;

import m2pam.project.Model.Acteur.Client;
import m2pam.project.Model.Alerte.Alerte;
import m2pam.project.Repository.AlerteRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class AlerteService implements IAlerteService{

    @Autowired
    AlerteRespository alerteRespository;

    @Override
    public List<Alerte> getAllAlerte() {
        List<Alerte> list = new ArrayList<>();
        alerteRespository.findAll().forEach(e -> list.add(e));
        return list;
    }

    @Override
    public void addAlerte(Alerte alerte) {
        alerteRespository.save(alerte);
    }

    @Override
    public List<Alerte> findAlertesById(long ID) {
        List<Alerte> res = new ArrayList<>();
        List<Alerte> alertes = getAllAlerte();
        for(Alerte alert : alertes){
            if(alert.getRecepteur().getUserID() == ID){
                res.add(alert);
            }
        }
        return res;
    }


}
