import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InscriptionService} from './service/inscription.service';
import {HeaderComponent} from './header/header.component';
import {AuthComponent} from './auth/auth.component';
import {SigninComponent} from './auth/signin/signin.component';

import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './service/auth.service';
import {ObjectsService} from './service/objects.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AuthGuardService} from './service/auth-guard.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VariablesGlobales} from './VariablesGlobales';
import { ParcelleComponent } from './parcelle/parcelle.component';
import {ParcelleService} from './service/parcelle.service';
import { PlantationComponent } from './plantation/plantation.component';
import { AddPlantationComponent } from './add-plantation/add-plantation.component';
import { EditPlantationComponent } from './edit-plantation/edit-plantation.component';
import { TraitementComponent } from './traitement/traitement.component';
import { AddTraitementComponent } from './add-traitement/add-traitement.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {TopnavbarComponent} from './layout/topnavbar/topnavbar.component';
import {AsidenavbarComponent} from './layout/asidenavbar/asidenavbar.component';
import {FooternavbarComponent} from './layout/footernavbar/footernavbar.component';
import {SettingsnavbarComponent} from './layout/settingsnavbar/settingsnavbar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap';
import {AlerteComponent} from './alerte/alerte.component';
import {AlerteService} from './service/alerte.service';
import {InscriptionParcelleComponent} from './inscription_parcelle/inscription_parcelle.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import { ReceptionAlerteComponent } from './reception-alerte/reception-alerte.component';


const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'acceuil', component: DashboardComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: '**', redirectTo: 'not-found' },
  { path: 'alertes', component: ReceptionAlerteComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SigninComponent,
    ParcelleComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DashboardModule,
    ModalModule.forRoot()
  ],
  providers: [
    AuthService,
    ObjectsService,
    AuthGuardService,
    VariablesGlobales,
    HeaderComponent,
    BsModalRef,
    ParcelleService,
    BsModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
