import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableShellComponent } from './table-shell/table-shell.component';

const routes: Routes = [
  {
    path: 'casino', component: TableShellComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
