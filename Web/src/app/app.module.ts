import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './navigation/sidebar/sidebar.component';
import {SubnavComponent} from './navigation/subnav/subnav.component';
import {ProjectComponent} from './project/project.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {ConsultantListComponent} from './consultant/consultant-list/consultant-list.component';
import {AffectationComponent} from './affectation/affectation.component';
import {AffectationListComponent} from './affectation/affectation-list/affectation-list.component';
import {AffectationService} from './services/affectation.service';
import {ConsultantService} from './services/consultant.service';
import {ProjectService} from './services/project.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProjectAddComponent} from './project/project-add/project-add.component';
import {ProjectEditComponent} from './project/project-edit/project-edit.component';
import {FormComponent} from './form/form.component';
import {ModalComponent} from './modal/modal.component';
import {ConsultantEditComponent} from './consultant/consultant-edit/consultant-edit.component';
import {ConsultantAddComponent} from './consultant/consultant-add/consultant-add.component';
import { AffectationAddComponent } from './affectation/affectation-add/affectation-add.component';
import { AffectationEditComponent } from './affectation/affectation-edit/affectation-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SubnavComponent,
    ProjectComponent,
    ProjectListComponent,
    ConsultantComponent,
    ConsultantListComponent,
    AffectationComponent,
    AffectationListComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    FormComponent,
    ModalComponent,
    ConsultantEditComponent,
    ConsultantAddComponent,
    AffectationAddComponent,
    AffectationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AffectationService,
    ConsultantService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
