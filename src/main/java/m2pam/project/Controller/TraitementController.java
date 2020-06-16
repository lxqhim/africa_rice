package m2pam.project.Controller;

import m2pam.project.Model.Acteur.Utilisateur;
import m2pam.project.Model.Plantation.Plantation;
import m2pam.project.Model.Traitement;
import m2pam.project.Service.TraitementService;
import m2pam.project.Service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/traitements"})
public class TraitementController {

    @Autowired
    private TraitementService traitementService;


    // =========================================== Get All Traitements =========================================

    @GetMapping
    public ResponseEntity<List<Traitement>> getAll() {
        List<Traitement> res = traitementService.getAll();

        if (res == null || res.isEmpty()){
            return new ResponseEntity<List<Traitement>>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<List<Traitement>>(res, HttpStatus.OK);
    }


    // =========================================== Get Traitement By ID =========================================
    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Traitement> get(@PathVariable("id") int id){
        Traitement traitement = traitementService.findTraitementByID(id);

        if (traitement == null){
            return new ResponseEntity<Traitement>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Traitement>(traitement, HttpStatus.OK);
    }



    // =========================================== Update Existing Traitement ===================================

    @PutMapping(path = {"/{id}"})
    public ResponseEntity<Traitement> update(@PathVariable int id, @RequestBody Traitement newT){

        Traitement old = traitementService.findTraitementByID(id);

        if (old == null){
            return new ResponseEntity<Traitement>(HttpStatus.NOT_FOUND);
        }
        old.setCritique(newT.getCritique());
        old.setDate(newT.getDate());
        old.setNiveau(newT.getNiveau());
        old.setObservation(newT.getObservation());
        old.setOperateur(newT.getOperateur());
        old.setPlantation(newT.getPlantation());

        traitementService.update(old);
        return new ResponseEntity<Traitement>(old, HttpStatus.OK);
    }



    // =========================================== Create New Traitement ========================================
    @PostMapping
    public ResponseEntity<Void> create(@RequestBody Traitement traitement, UriComponentsBuilder ucBuilder){
        if (traitementService.exists(traitement)){
            //a modifier
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        traitementService.add(traitement);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/traitements").buildAndExpand(traitement.getTraitementID()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);

    }
}
