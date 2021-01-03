import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SERVER_CONSULTANTS} from '../app.constants';
import {Consultant} from '../models/Consultant.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(`${SERVER_CONSULTANTS}/`);
  }

  getById(id: number): Observable<Consultant> {
    return this.http.get<Consultant>(`${SERVER_CONSULTANTS}/${id}`);
  }

  store(consultant: Consultant): Observable<Consultant> {
    return this.http.post<Consultant>(`${SERVER_CONSULTANTS}/`, consultant);
  }

  update(id: number, consultant: Consultant): Observable<Consultant> {
    return this.http.put<Consultant>(`${SERVER_CONSULTANTS}/${id}`, consultant);
  }

  delete(id: number): Observable<Consultant> {
    return this.http.delete<Consultant>(`${SERVER_CONSULTANTS}/${id}`);
  }
}
