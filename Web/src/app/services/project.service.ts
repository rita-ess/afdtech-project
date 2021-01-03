import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/Project.model';
import {SERVER_PROJECTS} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${SERVER_PROJECTS}/`);
  }

  getById(id: number): Observable<Project> {
    return this.http.get<Project>(`${SERVER_PROJECTS}/${id}`);
  }

  store(project: Project): Observable<Project> {
    return this.http.post<Project>(`${SERVER_PROJECTS}/`, project);
  }

  update(project: Project): Observable<Project> {
    return this.http.put<Project>(`${SERVER_PROJECTS}/${project.id}`, project);
  }

  delete(id: number): Observable<Project> {
    return this.http.delete<Project>(`${SERVER_PROJECTS}/${id}`);
  }
}
