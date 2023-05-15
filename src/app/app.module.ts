import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { StudiesComponent } from './components/studies/studies.component';
import { GraduatesComponent } from './components/graduates/graduates.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ReferencesComponent } from './components/references/references.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { DiplomatComponent } from './components/diplomat/diplomat.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { StudyComponent } from './components/study/study.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CertificatesComponent,
    StudiesComponent,
    GraduatesComponent,
    TechnologiesComponent,
    ReferencesComponent,
    CertificateComponent,
    DiplomatComponent,
    TechnologyComponent,
    ReferenceComponent,
    StudyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
