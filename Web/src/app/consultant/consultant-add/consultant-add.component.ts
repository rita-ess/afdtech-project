import {Component, OnInit} from '@angular/core';
import {Consultant} from '../../models/Consultant.model';
import {FormBuilder, Validators} from '@angular/forms';
import {ConsultantService} from '../../services/consultant.service';

@Component({
  selector: 'app-consultant-add',
  templateUrl: './consultant-add.component.html',
  styleUrls: ['./consultant-add.component.css']
})
export class ConsultantAddComponent implements OnInit {

  consultantForm: any;
  inputs: any;

  constructor(private service: ConsultantService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.inputs = [
      {
        id: 'firstName',
        placeholder: 'Enter the First name',
        name: 'firstName',
        label: 'First name of the Consultant',
        type: 'text'
      },
      {
        id: 'lastName',
        placeholder: 'Enter the Last name',
        name: 'lastName',
        label: 'Last name of the Consultant',
        type: 'text'
      },
      {
        id: 'email',
        placeholder: 'Enter the Email',
        name: 'email',
        label: 'Email of the Consultant',
        type: 'email'
      }
    ];
    this.consultantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addConsultant(): void {
    const formValue = this.consultantForm.value;
    const newConsultant = new Consultant(
      0,
      formValue.firstName,
      formValue.lastName,
      formValue.email
    );
    this.service.store(newConsultant).subscribe((data: any) => {
      alert('Added');
    });
  }

}
