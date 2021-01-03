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
