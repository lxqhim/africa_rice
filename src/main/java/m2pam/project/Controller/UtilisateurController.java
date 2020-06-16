package m2pam.project.Controller;


import m2pam.project.Model.Acteur.Role;
import m2pam.project.Model.Acteur.Utilisateur;
import m2pam.project.Model.Parcelle.Parcelle;
import m2pam.project.Service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/users"})
public class UtilisateurController {
    @Autowired
    private UtilisateurService utilisateurService;

  //  @Autowired
    //private PasswordAuthentication passwordAuthentication;
    // =========================================== Get All Users =========================================

    @GetMapping
    public ResponseEntity<List<Utilisateur>> getAll() {
        List<Utilisateur> users = utilisateurService.getAllUsers();

        if (users == null || users.isEmpty()){
            return new ResponseEntity<List<Utilisateur>>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<List<Utilisateur>>(users, HttpStatus.OK);
    }

    @GetMapping (path = {"/find/{id}"})
    public ResponseEntity<List<Utilisateur>> getAllByRole(@PathVariable("id") Long id) {
        List<Utilisateur> users;
        users = utilisateurService.getAllUsers();
        List<Utilisateur> res = new ArrayList<>();
        Utilisateur utilisateur = utilisateurService.findUtilisateurByID(id);
        switch (utilisateur.getActeur()){
            case "administrateur":
                if (users == null || users.isEmpty()){
                    return new ResponseEntity<List<Utilisateur>>(HttpStatus.NO_CONTENT);
                }
                for(Utilisateur u : users ) {
                        if(id!=u.getUserID()) res.add(u);
                }
                return new ResponseEntity<List<Utilisateur>>(res, HttpStatus.OK);

            case "cultivateur":
                if (users == null || users.isEmpty()){
                    return new ResponseEntity<List<Utilisateur>>(HttpStatus.NO_CONTENT);
                }
                for(Utilisateur u : users ) {
                    if(!u.getActeur().equals("client")){
                        if(id!=u.getUserID()) res.add(u);
                    }
                }

                return new ResponseEntity<List<Utilisateur>>(res, HttpStatus.OK);
            case "agronome":
                if (users == null || users.isEmpty()){
                    return new ResponseEntity<List<Utilisateur>>(HttpStatus.NO_CONTENT);
                }
                for(Utilisateur u : users ) {
                    if(!u.getActeur().equals("client")){
                        if(id!=u.getUserID()) res.add(u);
                    }
                }

                return new ResponseEntity<List<Utilisateur>>(res, HttpStatus.OK);
            case "client":
                if (users == null || users.isEmpty()){
                    return new ResponseEntity<List<Utilisateur>>(HttpStatus.NO_CONTENT);
                }
                for(Utilisateur u : users ) {
                    if(u.getActeur().equals("administrateur")){
                        if(id!=u.getUserID()) res.add(u);
                    }
                }

                return new ResponseEntity<List<Utilisateur>>(res, HttpStatus.OK);
            default:
                break;
        }

        return new ResponseEntity<List<Utilisateur>>(HttpStatus.NO_CONTENT);
    }

    // =========================================== Get User By email password =========================================
    @GetMapping(path = {"/connexion/{email}/{password}"})
    public ResponseEntity<Utilisateur> get(@PathVariable("email") String email, @PathVariable("password") String password){
        //   User user = userService.getUserByEmailPassword(email,password);
        Utilisateur user = utilisateurService.getUserByEmailMDPUtilisateur(email,password);
        if (user == null){

            return new ResponseEntity<Utilisateur>(HttpStatus.NOT_FOUND);
        }
        else {
                return new ResponseEntity<Utilisateur>(user, HttpStatus.OK);
        }

    }


    // =========================================== Get User By ID =========================================
    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Utilisateur> get(@PathVariable("id") int id){
        Utilisateur user = utilisateurService.findUtilisateurByID(id);

        if (user == null){
            return new ResponseEntity<Utilisateur>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Utilisateur>(user, HttpStatus.OK);
    }


    // =========================================== Update Existing User ===================================

    @PutMapping(path = {"/{id}"})
    public ResponseEntity<Utilisateur> update(@PathVariable int id, @RequestBody Utilisateur user){

        Utilisateur Usercourant = utilisateurService.findUtilisateurByID(id);

        if (Usercourant == null){
            return new ResponseEntity<Utilisateur>(HttpStatus.NOT_FOUND);
        }
        Usercourant.setAdresse(user.getAdresse());
        Usercourant.setEmail(user.getEmail());
        Usercourant.setNom(user.getNom());
        Usercourant.setPrenom(user.getPrenom());
        Usercourant.setMdp(user.getMdp());
        Usercourant.setTelephone(user.getTelephone());



        utilisateurService.updateUser(user);
        return new ResponseEntity<Utilisateur>(Usercourant, HttpStatus.OK);
    }

    // =========================================== Create New User ========================================
    /*
    @PostMapping
    public ResponseEntity<Void> create(@RequestBody Utilisateur user, UriComponentsBuilder ucBuilder){
        if (utilisateurService.exists(user)){
            //a modifier
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        utilisateurService.addutilisateur(user);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/users").buildAndExpand(user.getUserID()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);

    }*/
    @PostMapping(path = {"/create"})
    public ResponseEntity<Void> create(@RequestBody Utilisateur user, UriComponentsBuilder ucBuilder){

        if (!utilisateurService.existsEmail(user)){
            utilisateurService.addutilisateur(user);
            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(ucBuilder.path("/users").buildAndExpand(user.getUserID()).toUri());
            return new ResponseEntity<Void>(headers, HttpStatus.CREATED);

        }else {

            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/findUser/{search}")
    public List<Utilisateur> findUser(@PathVariable String search) {
        List<Utilisateur> u=new ArrayList<>();
        u= utilisateurService.findUsers( search);
        return u;
    }

    @RequestMapping(value = "/delete/{id}",method = {RequestMethod.GET, RequestMethod.POST})
    public List<Utilisateur> delete(@PathVariable int id) {
        Utilisateur user=utilisateurService.findUtilisateurByID(id);

        utilisateurService.deleteutilisateur(user);
        //  repository.deleteById(id);
        return   utilisateurService.getAllUsers();
    }

}

