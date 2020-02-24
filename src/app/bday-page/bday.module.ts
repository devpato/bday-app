import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BdayShellComponent } from './components/bday-shell/bday-shell.component';
import { BdayFormComponent } from './containers/bday-form/bday-form.component';
import { StoreModule } from "@ngrx/store";
import { reducer } from './state/bday.reducer';
import { EffectsModule } from "@ngrx/effects";
import { BdayEffects } from './state/bday.effect';
import { BdayResultsComponent } from './containers/bday-results/bday-results.component';
import { SharedModule } from '../shared/shared.module';



const bdayRoutes: Routes = [{ path: "", component: BdayShellComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(bdayRoutes),
    SharedModule,
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