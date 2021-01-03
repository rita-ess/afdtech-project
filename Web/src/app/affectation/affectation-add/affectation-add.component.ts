import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/Project.model';
import {Consultant} from '../../models/Consultant.model';
import {ProjectService} from '../../services/project.service';
import {ConsultantService} from '../../services/consultant.service';
import {AffectationService} from '../../services/affectation.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Affectation} from '../../models/Affectation.model';

@Component({
  selector: 'app-affectation-add',
  templateUrl: './affectation-add.component.html',
  styleUrls: ['./affectation-add.component.css']
})
export class AffectationAddComponent implements OnInit {

  affectationForm: any;
  projects: any;
  consultants: any;


  constructor(private serviceAffectation: AffectationService, private serviceProject: ProjectService, private serviceConsultant: ConsultantService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getProjects();
    this.getConsultants();
  }

  public getProjects(): void {
    this.serviceProject.getAll().subscribe((data: Project[]) => {
      this.projects = data;
    });
    this.initForm();
  }

  initForm(): void {
    this.affectationForm = this.formBuilder.group({
      project: ['', Validators.required],
      consultant: ['', Validators.required]
    });
  }

  getConsultants(): void {
    this.serviceConsultant.getAll().subscribe((data: Consultant[]) => {
      this.consultants = data;
      console.log('consultants', this.consultants);
    });
  }

  addAffectation(): void {
    const formValue = this.affectationForm.value;
    const newAffectation = new Affectation(
      0,
      formValue.project,
      formValue.consultant,
    );
    this.serviceAffectation.store(newAffectation).subscribe((data: any) => {
      console.log('post affectation ', data);
    });
  }
}
