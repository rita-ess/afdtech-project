import {Component, Input, OnInit} from '@angular/core';
import {AffectationService} from '../../services/affectation.service';
import {Project} from '../../models/Project.model';
import {FormBuilder, Validators} from '@angular/forms';
import {Consultant} from '../../models/Consultant.model';
import {ProjectService} from '../../services/project.service';
import {ConsultantService} from '../../services/consultant.service';
import {Affectation} from '../../models/Affectation.model';

@Component({
  selector: 'app-affectation-edit',
  templateUrl: './affectation-edit.component.html',
  styleUrls: ['./affectation-edit.component.css']
})
export class AffectationEditComponent implements OnInit {

  affectationForm: any;
  projects: any;
  consultants: any;
  @Input()
  affectation: any;

  constructor(private service: AffectationService, private serviceProject: ProjectService, private serviceConsultant: ConsultantService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getProjects();
    this.getConsultants();
    this.initForm();
  }

  public getProjects(): void {
    this.serviceProject.getAll().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  initForm(): void {
    this.affectationForm = this.formBuilder.group({
      project: [this.affectation.projectId, Validators.required],
      consultant: [this.affectation.consultantId, Validators.required]
    });
  }

  getConsultants(): void {
    this.serviceConsultant.getAll().subscribe((data: Consultant[]) => {
      this.consultants = data;
      console.log('consultants', this.consultants);
    });
  }

  updateAffectation(): void {
    const formValue = this.affectationForm.value;
    const affectation = new Affectation(
      this.affectation.id,
      formValue.project,
      formValue.consultant,
    );
    this.service.update(affectation).subscribe((data: any) => {
      console.log('post project ', data);
    });
  }

}
