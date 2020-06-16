package m2pam.project.Controller;

import m2pam.project.Model.Acteur.Client;
import m2pam.project.Model.Alerte.Alerte;
import m2pam.project.Model.Parcelle.Parcelle;
import m2pam.project.Service.AlerteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/alertes"})
public class AlerteController {
    @Autowired
    private AlerteService alerteService;

    @GetMapping
    public ResponseEntity<List<Alerte>> getAll() {
        List<Alerte> alertes = alerteService.getAllAlerte();

        if (alertes == null || alertes.isEmpty()){
            return new ResponseEntity<List<Alerte>>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<List<Alerte>>(alertes, HttpStatus.OK);
    }


    @GetMapping(path = {"/{id}"})
    public List<Alerte> getMyAlertes(@PathVariable("id") int id){
        List<Alerte> alertes = this.alerteService.findAlertesById(id);
        /*
        if (alertes == null){
            return new ResponseEntity<Alerte>(HttpStatus.NOT_FOUND);
        }*/

        //return new ResponseEntity<Alerte>(alerte, HttpStatus.OK);
        return alertes;
    }


    @PostMapping(path = "/add")
    public Alerte create(@RequestBody Alerte alerte){
        alerteService.addAlerte(alerte);
        //HttpHeaders headers = new HttpHeaders();
        //headers.setLocation(ucBuilder.path("/parcelles/{id}").buildAndExpand(parcelle.getPacelleId()).toUri());
        //return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
        return alerte;
    }
}
