package m2pam.project.Service;

import m2pam.project.Model.Plantation.Plantation;
import m2pam.project.Model.Traitement;
import m2pam.project.Repository.PlantationRepository;
import m2pam.project.Repository.TraitementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TraitementService implements ITraitementService{


    @Autowired
    TraitementRepository traitementRepository;

    @Override
    public List<Traitement> getAll() {
        List<Traitement> list = new ArrayList<>();
        traitementRepository.findAll().forEach(e -> list.add(e));
        return list;    }

    @Override
    public void add(Traitement traitement) {
        traitementRepository.save(traitement);
    }

    @Override
    public void update(Traitement traitement) {
        traitementRepository.save(traitement);
    }

    @Override
    public Traitement findTraitementByID(long id) {
        Traitement plan = traitementRepository.findOne(id);
        return plan;
    }

    @Override
    public boolean exists(Traitement traitement) {
        return findTraitementByID(traitement.getTraitementID()) != null;
    }

    @Override
    public void delete(Traitement traitement) {
        traitementRepository.delete(traitement);
    }
}
