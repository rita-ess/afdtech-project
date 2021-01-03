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
        placeholder: 'Enter the name',
        name: 'firstName',
        label: 'firstName of the Consultant',
        type: 'text'
      },
      {
        id: 'lastName',
        placeholder: 'Enter the lastName',
        name: 'lastName',
        label: 'Make a description',
        type: 'text'
      },
      {
        id: 'email',
        placeholder: 'Enter the email',
        name: 'email',
        label: 'Make a description',
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
      alert('updated successfuly');
    });
  }

}
