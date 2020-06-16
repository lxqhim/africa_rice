import { Component, TemplateRef } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private authService: AuthService, private router: Router) {}
public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

}


  onSignIn() {
  console.log('Tentative de connexion' );
  this.router.navigate(['auth/signin']);
}


onSignOut() {
  console.log('Tentative de deconnexion' );
  this.authService.signOut(this.authService.user);
}
}
