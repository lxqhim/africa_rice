package m2pam.project.Controller;

import m2pam.project.Model.Parcelle.Parcelle;
import m2pam.project.Service.ParcelleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import javax.mail.Multipart;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = {"/parcelles"})
public class ParcelleController {
    @Autowired
    ParcelleService parcelleService;

    @GetMapping
    public ResponseEntity<List<Parcelle>> getAll() {
        List<Parcelle> parcelles = parcelleService.getAllParcelles();

        if(parcelles.isEmpty() || parcelles == null ) {
            return new ResponseEntity<List<Parcelle>>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<List<Parcelle>>(parcelles, HttpStatus.OK);
    }

    @GetMapping(path = {"/findParcellesLonLati/{lon}/{lati}"})
    public Parcelle findParcelle(@PathVariable String lon,@PathVariable String lati) {
        Parcelle u=new Parcelle();
        u=  parcelleService.getParcelleBylongLati(lon,lati);
        return u;
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Parcelle> get(@PathVariable("id") int id){
        Parcelle parcelle = parcelleService.findParcelleByID(id);

        if (parcelle == null){
            return new ResponseEntity<Parcelle>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Parcelle>(parcelle, HttpStatus.OK);
    }


    @PutMapping(path = {"/{id}"})
    public ResponseEntity<Parcelle> update(@PathVariable int id, @RequestBody Parcelle newParcelle){

        Parcelle parcelle = parcelleService.findParcelleByID(id);

        if (parcelle == null){
            return new ResponseEntity<Parcelle>(HttpStatus.NOT_FOUND);
        }
        parcelle.setSurface(newParcelle.getSurface());
        parcelle.setAcidite(newParcelle.getAcidite());
        parcelle.setArgile(newParcelle.isArgile());
        parcelle.setPente(newParcelle.getPente());

        parcelleService.updateParcelle(parcelle);
        return new ResponseEntity<Parcelle>(parcelle, HttpStatus.OK);
    }



    //@PostMapping(path = "/add")


    @RequestMapping(value = "/delete/{id}",method = {RequestMethod.GET, RequestMethod.POST})
    public Parcelle delete(@PathVariable("id") int id, UriComponentsBuilder ucBuilder) {
        Parcelle parcelle = parcelleService.findParcelleByID(id);
        if (!parcelleService.exists(parcelle)) {
            //return new ResponseEntity<Parcelle>(HttpStatus.NOT_FOUND);
            return null;
        }
        parcelleService.deleteParcelle(parcelle);
        return parcelle;
        //return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @GetMapping(path = "/photoParcelle/{id}",produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getphoto(@PathVariable("id") Long id) throws Exception{
        Parcelle p = parcelleService.findParcelleByID(id);
        return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/pam/parcelle/"+p.getPhoto()));
    }

    @RequestMapping(value="/photoParcelle/upload", method = RequestMethod.POST)
    @ResponseBody
    public void addPhotoParcelle(@RequestParam("file")MultipartFile file){
        try{
            String uploadDir = System.getProperty("user.home")+"/pam/parcelle/";
            File fileToTransfert = new File(uploadDir+file.getOriginalFilename());
            file.transferTo(fileToTransfert);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @RequestMapping(value="/add", method = RequestMethod.POST)
    public Parcelle create(@RequestBody Parcelle parcelle){
        if (parcelleService.exists(parcelle)) {
            //return new ResponseEntity<Void>(HttpStatus.CONFLICT);
            return null;
        }
        parcelleService.addParcelle(parcelle);
        //HttpHeaders headers = new HttpHeaders();
        //headers.setLocation(ucBuilder.path("/parcelles/{id}").buildAndExpand(parcelle.getPacelleId()).toUri());
        //return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
        return parcelle;
    }
}
