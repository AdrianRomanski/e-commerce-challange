import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicServicesContainerComponent } from './containers/electronic-services-container/electronic-services-container.component';

export const routes: Routes = [
  { path: '', component: ElectronicServicesContainerComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ElectronicServicesRouterModule {}
