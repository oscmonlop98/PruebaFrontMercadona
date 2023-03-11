import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigTornillosComponent } from './modules/config-tornillos/config-tornillos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'config-tornillos', component: ConfigTornillosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
