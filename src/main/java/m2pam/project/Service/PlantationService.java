package m2pam.project.Service;

import m2pam.project.Model.Plantation.Plantation;
import m2pam.project.Repository.PlantationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class PlantationService implements IPlantationService {

    @Autowired
    PlantationRepository plantationRepository;


    @Override
    public List<Plantation> getAll() {
        List<Plantation> list = new ArrayList<>();
        plantationRepository.findAll().forEach(plantation -> list.add(plantation));
        return list;
    }


    @Override
    public void add(Plantation plantation) {
        plantationRepository.save(plantation);
    }

    @Override
    public void update(Plantation plantation) {
        plantationRepository.save(plantation);
    }

    @Override
    public Plantation findPlantationByID(long id) {
        Plantation plan = plantationRepository.findOne(id);
        return plan;
    }

    @Override
    public boolean exists(Plantation plantation) {
        return findPlantationByID(plantation.getPlanID()) != null;
    }

    @Override
    public void delete(Plantation plantation) {
         plantationRepository.delete(plantation);
    }
}
