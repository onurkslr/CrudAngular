import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { List } from './list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  cities: List[];
  //path:"http://localhost:8080/api/cities/"

  ngOnInit(): void {
    this.http
      .get<List[]>("http://localhost:8080/api/cities")
      .subscribe(data => {
        this.cities = data;
      });
  }
}
