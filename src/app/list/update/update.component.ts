import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { List } from '../list';
import { ServicesComponent } from 'src/app/services/services.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[ServicesComponent]

})
export class UpdateComponent implements OnInit {

  constructor(private servicesComponent:ServicesComponent) { }
  model: List = new List();

  ngOnInit(): void {
  }

  update(form: NgForm) {
    this.servicesComponent.updateCity(this.model).subscribe(data=>{});
  }

}
