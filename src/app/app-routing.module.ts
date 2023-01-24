import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableShellComponent } from './table-shell/table-shell.component';
import { WelcomeModule } from './welcome/welcome.module';
import { SplashComponent } from './welcome/splash/splash.component';

const routes: Routes = [

  {path: 'welcome', component:SplashComponent},
  {path: 'casino', component: TableShellComponent},
 { path: '', redirectTo:'welcome', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
