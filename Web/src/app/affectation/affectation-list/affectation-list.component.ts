import {Component, OnInit} from '@angular/core';
import {AffectationService} from '../../services/affectation.service';
import {Affectation} from '../../models/Affectation.model';
import {Consultant} from '../../models/Consultant.model';

@Component({
  selector: 'app-affectation-list',
  templateUrl: './affectation-list.component.html',
  styleUrls: ['./affectation-list.component.css']
})
export class AffectationListComponent implements OnInit {

  constructor(private service: AffectationService) {
  }

  affectations: any;

  ngOnInit(): void {
    this.getAffectations();
  }

  getAffectations(): void {
    this.service.getAll().subscribe((data: Affectation[]) => {
      this.affectations = data;
      console.log('affectations', this.affectations);
    });
  }


  deleteAffectation(id: number): void {
    if (confirm('Do you really want to delete this ?')) {
      this.service.delete(id).subscribe((data: any) => {
        console.log('post affectation ', data);
        this.getAffectations();
        alert('This Affectation was deleted');
      });
    }
  }

  showModal(a: Affectation): void {
    // @ts-ignore
    $('#editAffectation_' + a.id).modal('show');
  }
}
