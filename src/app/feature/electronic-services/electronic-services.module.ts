import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicServicesContainerComponent } from './containers/electronic-services-container/electronic-services-container.component';
import {ElectronicServicesRouterModule} from "./electronic-services-router.module";

@NgModule({
  declarations: [
    ElectronicServicesContainerComponent
  ],
  imports: [CommonModule, ElectronicServicesRouterModule],
})
export class ElectronicServicesModule {}
