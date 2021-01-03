import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/Project.model';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  userForm: any;
  inputs: any;

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
        type: 'text'
      },
      {
        id: 'description',
        placeholder: 'Enter the description',
        name: 'description',
        label: 'Make a description',
        type: 'textarea'
      }
    ];

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addProject(): void {
    const formValue = this.userForm.value;
    const newProject = new Project(
      0,
      formValue.name,
      formValue.description
    );
    this.service.store(newProject).subscribe((data: any) => {
      console.log('post project ', data);
    });
  }
}
