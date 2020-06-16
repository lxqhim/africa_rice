package m2pam.project.Service;


import m2pam.project.Model.Acteur.Utilisateur;

import java.util.List;


public interface IUtilisateurService {
    public List<Utilisateur> getAllUsers();

    public void addutilisateur(Utilisateur U);
    public void deleteutilisateur(Utilisateur U);
    public Utilisateur findUtilisateurByID(long ID);
    public Boolean exists(Utilisateur u);
    public Boolean existsEmail(Utilisateur u);
    public void updateUser(Utilisateur user);
    Utilisateur getUserByEmail(String email);
    Utilisateur getUserByEmailMDPUtilisateur(String mdp,String mm);

    List<Utilisateur>findByNom(String search);
    List<Utilisateur>findUsers(String search);


}
