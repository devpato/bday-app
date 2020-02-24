import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BdayShellComponent } from './components/bday-shell/bday-shell.component';
import { BdayFormComponent } from './containers/bday-form/bday-form.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { reducer } from './state/bday.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { BdayEffects } from './state/bday.effect';
import { BdayResultsComponent } from './containers/bday-results/bday-results.component';



const bdayRoutes: Routes = [{ path: "", component: BdayShellComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bdayRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature("bday", reducer),
    EffectsModule.forFeature([BdayEffects])
  ],
  declarations: [
    BdayShellComponent,
    BdayFormComponent,
    BdayResultsComponent,
  ],
})
export class BdayModule { }