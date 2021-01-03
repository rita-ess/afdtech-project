import {Component, OnInit} from '@angular/core';
import {ConsultantService} from '../../services/consultant.service';
import {Consultant} from '../../models/Consultant.model';

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.css']
})
export class ConsultantListComponent implements OnInit {

  consultants: any;

  constructor(private service: ConsultantService) {
  }

  ngOnInit(): void {
    this.getConsultants();
  }

  getConsultants(): void {
    this.service.getAll().subscribe((data: Consultant[]) => {
      this.consultants = data;
    });
  }

  deleteConsultant(id: number): void {
    if (confirm('Do you really want to delete this ?')) {
      this.service.delete(id).subscribe((data: any) => {
        this.getConsultants();
        alert('This Consultant was deleted');
      });
    }
  }

  showModal(c: Consultant): void {
    // @ts-ignore
    $('#editConsultant_' + c.id).modal('show');
  }
}
