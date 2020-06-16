package m2pam.project.Service;

import m2pam.project.Model.Acteur.Client;
import m2pam.project.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ClientService implements IClientService {

    @Autowired
    ClientRepository clientRepository;


    @Override
    public List<Client> getAllClients() {
        List<Client> list = new ArrayList<>();
        clientRepository.findAll().forEach(e -> list.add(e));
        return list;
    }

    @Override
    public void addClient(Client client) {
        clientRepository.save(client);

    }

    @Override
    public Client findClientByID(long ID) {
        Client obj = clientRepository.findOne(ID);
        return obj;
    }




    @Override
    public boolean exists(Client u) {

        return findClientByID(u.getClientID()) != null;
    }

    @Override
    public void updateClient(Client user) { clientRepository.save(user); }
}
