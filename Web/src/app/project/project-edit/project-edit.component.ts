import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Project} from '../../models/Project.model';
import {ProjectListComponent} from "../project-list/project-list.component";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  projectForm: any;
  inputs: any;

  @Input()
  project: any;

  constructor(private service: ProjectService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.inputs = [
      {
        id: 'name',
        placeholder: 'Enter the name',
        name: 'name',
        label: 'Name of the project',
        type: 'text',
      },
      {
        id: 'description',
        placeholder: 'Enter the description',
        name: 'description',
        label: 'Make a description',
        type: 'textarea',
      }
    ];

    this.projectForm = this.formBuilder.group({
      name: [this.project.name, Validators.required],
      description: [this.project.description, Validators.required]
    });
  }

  updateProject(): void {
    const formValue = this.projectForm.value;
    const newProject = new Project(
      this.project.id,
      formValue.name,
      formValue.description
    );
    this.service.update(newProject).subscribe((data: any) => {
      alert('updated successfuly');
      window.location.reload();
    });
  }
}
