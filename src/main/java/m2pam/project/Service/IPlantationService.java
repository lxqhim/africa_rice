package m2pam.project.Service;

import m2pam.project.Model.Plantation.Plantation;

import java.util.List;

public interface IPlantationService {
    public List<Plantation> getAll();
    public void add(Plantation Plantation);
    public void update(Plantation plantation);
    public Plantation findPlantationByID(long id);
    public boolean exists(Plantation plantation);
    public void delete(Plantation plantation);
}
