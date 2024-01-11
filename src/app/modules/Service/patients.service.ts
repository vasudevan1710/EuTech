import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../Types/data';

import { Observable, catchError, throwError } from 'rxjs';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private apiUrl = environment.apiurl;

  constructor(private http: HttpClient) {}
baseurl = environment.apiurl;

public getsearchpatient(obj : any) {
  debugger
  return this.http.post(this.baseurl + "Patient/SearchIndividual",obj).pipe(catchError(this.handleError));
}

  getVisits(search:string) {
    return this.http.get('api/visitmgmt/Patient/InitSearch?Codes='+search);
  }
  // Create
  addPatient(data: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, data);
  }

  // Read
  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPatientById(patientId: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${patientId}`);
  }

  // Update
  updatePatient(patientId: number, updatedData: any): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${patientId}`, updatedData);
  }

  // Delete
  deletePatient(patientId: number): Observable<Patient> {
    return this.http.delete<Patient>(`${this.apiUrl}/${patientId}`);
  }

  public handleError(error: Response) {
    return throwError(error);
  }
}

