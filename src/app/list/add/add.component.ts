import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { NgForm } from '@angular/forms';
import { ServicesComponent } from 'src/app/services/services.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[ServicesComponent]
})
export class AddComponent implements OnInit {
  constructor(private servicesComponent:ServicesComponent) {}
  model: List = new List();
  ngOnInit(): void {}

  add(form: NgForm) {
    this.servicesComponent.addCity(this.model).subscribe(data=>{});
  }
}
