import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'e-services', pathMatch:'full'},
  { path: '**', redirectTo: 'e-services', pathMatch:'full'},
  { path: 'e-services', loadChildren: () => import('./feature/electronic-services/electronic-services.module').then(m => m.ElectronicServicesModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
