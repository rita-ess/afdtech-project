import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Affectation} from '../models/Affectation.model';
import {SERVER_AFFECTATIONS} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Affectation[]> {
    return this.http.get<Affectation[]>(`${SERVER_AFFECTATIONS}/`);
  }

  getById(id: number): Observable<Affectation> {
    return this.http.get<Affectation>(`${SERVER_AFFECTATIONS}/${id}`);
  }

  store(affectation: Affectation): Observable<Affectation> {
    return this.http.post<Affectation>(`${SERVER_AFFECTATIONS}/`, affectation);
  }

  update(id: number, affectation: Affectation): Observable<Affectation> {
    return this.http.put<Affectation>(`${SERVER_AFFECTATIONS}/${id}`, affectation);
  }

  delete(id: number): Observable<Affectation> {
    return this.http.delete<Affectation>(`${SERVER_AFFECTATIONS}/${id}`);
  }
}
