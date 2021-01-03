import {Component, OnInit} from '@angular/core';
import {AffectationService} from '../../services/affectation.service';
import {Affectation} from '../../models/Affectation.model';
import {Consultant} from '../../models/Consultant.model';
import {Project} from '../../models/Project.model';
import {ProjectService} from '../../services/project.service';
import {ConsultantService} from '../../services/consultant.service';

@Component({
  selector: 'app-affectation-list',
  templateUrl: './affectation-list.component.html',
  styleUrls: ['./affectation-list.component.css']
})
export class AffectationListComponent implements OnInit {

  constructor(private service: AffectationService, private serviceProject: ProjectService, private serviceConsultant: ConsultantService) {
  }

  affectations: any;

  ngOnInit(): void {
    this.getAffectations();
  }

  getAffectations(): void {
    this.service.getAll().subscribe((data: Affectation[]) => {
      this.affectations = data;

      data.forEach((d => {
        this.serviceProject.getById(d.projectId).subscribe((data: Project) => {
          d.project = data;
        });

        this.serviceConsultant.getById(d.consultantId).subscribe((data: Consultant) => {
          d.consultant = data;
        });
      }));
    });
  }


  deleteAffectation(id: number): void {
    if (confirm('Do you really want to delete this ?')) {
      this.service.delete(id).subscribe((data: any) => {
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
