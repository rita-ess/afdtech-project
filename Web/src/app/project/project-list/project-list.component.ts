import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/Project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: any;


  constructor(private service: ProjectService) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.service.getAll().subscribe((data: Project[]) => {
      this.projects = data;
      console.log('projects', this.projects);
    });
  }

  deleteProject(id: number): void {
    if (confirm('Do you really want to delete this ?')) {
      this.service.delete(id).subscribe((data: any) => {
        console.log('post consultants ', data);
        this.getProjects();
        alert('This Project was deleted');
      });
    }
  }

}
