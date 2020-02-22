import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BdayShellComponent } from './components/bday-shell/bday-shell.component';
import { BdayFormComponent } from './containers/bday-form/bday-form.component';
import { CommonModule } from '@angular/common';

const bdayRoutes: Routes = [{ path: "", component: BdayShellComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bdayRoutes),
  ],
  declarations: [
  BdayShellComponent,
  BdayFormComponent]
})
export class BdayModule {}