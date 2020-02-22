import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BdayShellComponent } from './components/bday-shell/bday-shell.component';
import { BdayFormComponent } from './containers/bday-form/bday-form.component';

const bdayRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(bdayRoutes),
  ],
  declarations: [
  BdayShellComponent,
  BdayFormComponent]
})
export class ProductModule {}