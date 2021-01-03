import {Component, Input, OnInit} from '@angular/core';
import {ConsultantService} from '../../services/consultant.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Consultant} from '../../models/Consultant.model';

@Component({
  selector: 'app-consultant-edit',
  templateUrl: './consultant-edit.component.html',
  styleUrls: ['./consultant-edit.component.css']
})
export class ConsultantEditComponent implements OnInit {

  consultantForm: any;
  inputs: any;

  @Input()
  consultant: any;

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
      firstName: [this.consultant.firstName, Validators.required],
      lastName: [this.consultant.lastName, Validators.required],
      email: [this.consultant.email, [Validators.required, Validators.email]]
    });
  }

  updateConsultant(): void {
    const formValue = this.consultantForm.value;
    const consultant = new Consultant(
      this.consultant.id,
      formValue.firstName,
      formValue.lastName,
      formValue.email
    );
    this.service.update(consultant).subscribe((data: any) => {
      alert('updated successfully');
      window.location.reload();
    });
  }

}
