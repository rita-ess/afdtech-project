import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {ProjectComponent} from './project/project.component';
import {ProjectFormComponent} from './project/project-form/project-form.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {ConsultantListComponent} from './consultant/consultant-list/consultant-list.component';
import {ConsultantFormComponent} from './consultant/consultant-form/consultant-form.component';
import {AffectationComponent} from './affectation/affectation.component';
import {AffectationListComponent} from './affectation/affectation-list/affectation-list.component';
import {AffectationFormComponent} from './affectation/affectation-form/affectation-form.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent,
    data: {title: 'Projects'},
    children: [
      {path: 'list', component: ProjectListComponent, data: {title: 'List of Projects'}},
      {path: 'add', component: ProjectFormComponent, data: {title: 'Add Project'}}
    ]
  },
  {
    path: 'consultants', component: ConsultantComponent, data: {title: 'Consultants'},
    children: [
      {path: 'list', component: ConsultantListComponent, data: {title: 'List of Consultants'}},
      {path: 'add', component: ConsultantFormComponent, data: {title: 'Add Consultant'}}
    ]
  },
  {
    path: 'affectations', component: AffectationComponent, data: {title: 'Affectations'},
    children: [
      {path: 'list', component: AffectationListComponent, data: {title: 'All Affectations'}},
      {path: 'add', component: AffectationFormComponent, data: {title: 'Add Affectation'}}
    ]
  },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
