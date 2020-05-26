import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from 'src/app/services/services.component';
import { List } from '../list';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[ServicesComponent]
})
export class DeleteComponent implements OnInit {

  constructor(private servicesComponent:ServicesComponent) { }
  model: List = new List();

  ngOnInit(): void {
  }
  delete(form: NgForm) {
    this.servicesComponent.deleteCity(this.model).subscribe(data=>{});
  }

}
