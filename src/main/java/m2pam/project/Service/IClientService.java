package m2pam.project.Service;


import m2pam.project.Model.Acteur.Client;
import m2pam.project.Model.Acteur.Utilisateur;

import java.util.List;

public interface IClientService {

    public List<Client> getAllClients();
    public void addClient(Client client);
    public Client findClientByID(long ID);
    public boolean exists(Client u);
    public void updateClient(Client user);


}
