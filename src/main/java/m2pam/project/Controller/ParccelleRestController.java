package m2pam.project.Controller;

import m2pam.project.Model.Parcelle.Parcelle;
import m2pam.project.Service.ParcelleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Files;
import java.nio.file.Paths;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ParccelleRestController {
    /*
    @Autowired
    ParcelleService parcelleService;
    @GetMapping(path = "/photoParcelle/{id}",produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getphoto(@PathVariable("id") Long id) throws Exception{
        Parcelle p=parcelleService.findParcelleByID(id);
        return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/pam/parcelle/"+p.getPhoto()));
    }*/
}
