import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BdayShellComponent } from './components/bday-shell/bday-shell.component';
import { BdayFormComponent } from './containers/bday-form/bday-form.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { reducer } from './state/bday.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const bdayRoutes: Routes = [{ path: "", component: BdayShellComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bdayRoutes),
    StoreModule.forFeature("bday", reducer),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  BdayShellComponent,
  BdayFormComponent]
})
export class BdayModule {}