import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'users',
  component: UsersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
