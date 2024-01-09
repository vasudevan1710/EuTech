import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../Types/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private apiUrl = 'http://192.168.0.127/api/visitmgmt/Patient/InitSearch?Codes=SX';

  constructor(private http: HttpClient) {}

  // Create
  addPatient(data: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, data);
  }

  // Read
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
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
}

