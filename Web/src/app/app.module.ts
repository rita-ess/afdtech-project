import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './navigation/sidebar/sidebar.component';
import {SubnavComponent} from './navigation/subnav/subnav.component';
import {ProjectComponent} from './project/project.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {ConsultantFormComponent} from './consultant/consultant-form/consultant-form.component';
import {ConsultantListComponent} from './consultant/consultant-list/consultant-list.component';
import {AffectationComponent} from './affectation/affectation.component';
import {AffectationFormComponent} from './affectation/affectation-form/affectation-form.component';
import {AffectationListComponent} from './affectation/affectation-list/affectation-list.component';
import {AffectationService} from './services/affectation.service';
import {ConsultantService} from './services/consultant.service';
import {ProjectService} from './services/project.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProjectAddComponent} from './project/project-add/project-add.component';
import {ProjectEditComponent} from './project/project-edit/project-edit.component';
import {FormComponent} from './form/form.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SubnavComponent,
    ProjectComponent,
    ProjectListComponent,
    ConsultantComponent,
    ConsultantFormComponent,
    ConsultantListComponent,
    AffectationComponent,
    AffectationFormComponent,
    AffectationListComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    FormComponent,
    ModalComponent
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
