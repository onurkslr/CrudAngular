import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { AddComponent } from './list/add/add.component';
import { UpdateComponent } from './list/update/update.component';
import { DeleteComponent } from './list/delete/delete.component';



const routes: Routes = [
  {path:'',component : ListComponent},
  {path:'add',component : AddComponent},
  {path:'update',component : UpdateComponent},
  {path:'delete',component : DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
