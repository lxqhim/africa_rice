package m2pam.project.Service;

import m2pam.project.Model.Acteur.Utilisateur;
import m2pam.project.Repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.PasswordAuthentication;
import java.util.ArrayList;
import java.util.List;

@Service
public class UtilisateurService implements IUtilisateurService {


    @Autowired
    UtilisateurRepository userRepository;
   // @Autowired
    //PasswordAuthentication passwordAuthentication;

    public UtilisateurService(){}


    @Override
    public List<Utilisateur> getAllUsers() {
        List<Utilisateur> list = new ArrayList<>();
        userRepository.findAll().forEach(e->list.add(e));

        return list;
    }

    @Override
    public void addutilisateur(Utilisateur U) {
        userRepository.save(U);
    }

    @Override
    public void deleteutilisateur(Utilisateur U) {
        userRepository.delete(U);
    }

    @Override
    public Utilisateur findUtilisateurByID(long ID) {
        Utilisateur user = userRepository.findOne(ID);
        return user;
    }

    @Override
    public Boolean exists(Utilisateur u) {

        return findUtilisateurByID(u.getUserID()) != null;
    }

    @Override
    public Boolean existsEmail(Utilisateur u) {
        if(userRepository.findByEmail(u.getEmail()) == null) return false;
        else return true;
    }


    @Override
    public void updateUser(Utilisateur user) { userRepository.save(user); }

    @Override
    public Utilisateur getUserByEmail(String email) {
        Utilisateur obj = userRepository.findByEmail(email);

        return obj;
    }

    @Override
    public Utilisateur getUserByEmailMDPUtilisateur(String mdp, String mm) {

        return userRepository.getUserByEmailMDP(mdp,mm);
    }
    /*@Override
    public Utilisateur getUserByMDP(String mdp) {
        Utilisateur obj = userRepository.getUserByMDP(mdp);

        return obj;
    }*/

    @Override
    public List<Utilisateur> findByNom(String search) {
        return null;
    }

    @Override
    public List<Utilisateur> findUsers(String search) {
        return userRepository.findUsers(search);
    }


}
