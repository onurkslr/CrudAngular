import { Component, OnInit } from '@angular/core';
import { List } from '../list/list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  addCity(City:List):Observable<List>{
    return this.http.post<List>("http://localhost:8080/api/add",City)
  }
  updateCity(City:List):Observable<List>{
    return this.http.post<List>("http://localhost:8080/api/update",City)
  }
  deleteCity(City:List):Observable<List>{
    return this.http.post<List>("http://localhost:8080/api/delete",City)
  }

}
