import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from '../layout/layout.module';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {AuthComponent} from '../auth/auth.component';
import {PlantationComponent} from '../plantation/plantation.component';
import {TraitementComponent} from '../traitement/traitement.component';
import {SigninComponent} from '../auth/signin/signin.component';
import {EditPlantationComponent} from '../edit-plantation/edit-plantation.component';
import {AddTraitementComponent} from '../add-traitement/add-traitement.component';
import {InscriptionComponent} from '../inscription/inscription.component';
import {AppComponent} from '../app.component';
import {AlerteComponent} from '../alerte/alerte.component';
import {ParcelleComponent} from '../parcelle/parcelle.component';
import {AddPlantationComponent} from '../add-plantation/add-plantation.component';
import {FooterComponent} from '../footer/footer.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {TopnavbarComponent} from '../layout/topnavbar/topnavbar.component';
import {AsidenavbarComponent} from '../layout/asidenavbar/asidenavbar.component';
import {FooternavbarComponent} from '../layout/footernavbar/footernavbar.component';
import {SettingsnavbarComponent} from '../layout/settingsnavbar/settingsnavbar.component';
import {InscriptionParcelleComponent} from '../inscription_parcelle/inscription_parcelle.component';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap';
import {InscriptionService} from '../service/inscription.service';
import {AuthService} from '../service/auth.service';
import {ObjectsService} from '../service/objects.service';
import {AuthGuardService} from '../service/auth-guard.service';
import {VariablesGlobales} from '../VariablesGlobales';
import {ParcelleService} from '../service/parcelle.service';
import {AlerteService} from '../service/alerte.service';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpClientModule} from '@angular/common/http';
import {SearchDeleteComponent} from "../search-delete/search-delete.component";
import {ReceptionAlerteComponent} from "../reception-alerte/reception-alerte.component";

export const routes: Routes = [
      {
            path: 'plantations',
            component: DashboardComponent,
            children : [
              {
                path: '', component: PlantationComponent
              }
            ]
    },
  {
            path: 'AddPlan',
            component: DashboardComponent,
            children : [
              {
                path: '', component: AddPlantationComponent
              }
            ]
    },
  {
    path: 'traitements',
    component: DashboardComponent,
    children : [
      {
        path: '', component: TraitementComponent
      }
    ]
  },
  {
    path: 'Addtraitement',
    component: DashboardComponent,
    children : [
      {
        path: '', component: AddTraitementComponent
      }
    ]
  },
  {
    path: 'inscription',
    component: DashboardComponent,
    children : [
      {
        path: '', component: InscriptionComponent
      }
    ]
  },
  {
    path: 'parcelles',
    component: DashboardComponent,
    children : [
      {
        path: '', component: ParcelleComponent
      }
    ]
  },
  {
    path: 'addparcelle',
    component: DashboardComponent,
    children : [
      {
        path: '', component: InscriptionParcelleComponent
      }
    ]
  },
  {
    path: 'viewusers',
    component: DashboardComponent,
    children : [
      {
        path: '', component: SearchDeleteComponent
      }
    ]
  },
  {
    path: 'sendsms',
    component: DashboardComponent,
    children : [
      {
        path: '', component: AlerteComponent
      }
    ]
  },
  {
    path: 'receivesms',
    component: DashboardComponent,
    children : [
      {
        path: '', component: ReceptionAlerteComponent
      }
    ]
  }
  ]

@NgModule({
  declarations: [
    ReceptionAlerteComponent,
    InscriptionComponent,
    AlerteComponent,
    PlantationComponent,
    AddPlantationComponent,
    EditPlantationComponent,
    TraitementComponent,
    AddTraitementComponent,
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    SettingsnavbarComponent,
    InscriptionParcelleComponent,
    SearchDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [
    InscriptionComponent,
    AlerteComponent,
    PlantationComponent,
    AddPlantationComponent,
    EditPlantationComponent,
    TraitementComponent,
    AddTraitementComponent,
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    SettingsnavbarComponent,
    InscriptionParcelleComponent,
    RouterModule,
    SearchDeleteComponent,
    ReceptionAlerteComponent
  ],
  providers: [
    InscriptionService,
    AuthService,
    ObjectsService,
    AuthGuardService,
    VariablesGlobales,
    BsModalRef,
    BsModalService,
    PlantationComponent,
    AlerteService,
  ],
  bootstrap: [AppComponent]
})
export class DashboardModule { }
