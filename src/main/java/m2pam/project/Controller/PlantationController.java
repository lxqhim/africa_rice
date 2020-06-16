package m2pam.project.Controller;

import m2pam.project.Model.Acteur.Utilisateur;
import m2pam.project.Model.Plantation.Plantation;
import m2pam.project.Model.Traitement;
import m2pam.project.Service.PlantationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/plantations"})
public class PlantationController {

    @Autowired
    PlantationService plantationService;

    @GetMapping
    public ResponseEntity<List<Plantation>> getAll() {
        List<Plantation> plantations = plantationService.getAll();

        if (plantations == null || plantations.isEmpty()){
            return new ResponseEntity<List<Plantation>>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<List<Plantation>>(plantations, HttpStatus.OK);
    }
    // =========================================== Get Plantation By ID =========================================
    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Plantation> get(@PathVariable("id") int id){
        Plantation plantation = plantationService.findPlantationByID(id);

        if (plantation == null){
            return new ResponseEntity<Plantation>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Plantation>(plantation, HttpStatus.OK);
    }

    // =========================================== Update Existing Plantation ===================================

    @PutMapping(path = {"/{id}"})
    public ResponseEntity<Plantation> update(@PathVariable int id, @RequestBody Plantation newP){

        Plantation old = plantationService.findPlantationByID(id);

        if (old == null){
            return new ResponseEntity<Plantation>(HttpStatus.NOT_FOUND);
        }
        old.setEtat(newP.getEtat());
        old.setNom(newP.getNom());
        old.setParcelle(newP.getParcelle());
        old.setProprietaire(newP.getProprietaire());

        plantationService.update(old);
        return new ResponseEntity<Plantation>(old, HttpStatus.OK);
    }


    // =========================================== Create New User ========================================
    @PostMapping
    public ResponseEntity<Void> create(@RequestBody Plantation plan, UriComponentsBuilder ucBuilder){
        if (plantationService.exists(plan)){
            //a modifier
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        plantationService.add(plan);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/plantations").buildAndExpand(plan.getPlanID()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);

    }

}
