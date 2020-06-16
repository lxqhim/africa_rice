import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  constructor(private user: AuthService, private route: Router) { }

  ngOnInit() {
  }


  profile() {
    this.user.signOut(this.user.user);
  }

  onSignOut() {
    console.log('Tentative de deconnexion' );
    this.user.signOut(this.user.user);
    this.route.navigate(['/']);
  }

}
