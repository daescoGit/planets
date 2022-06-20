import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetPageComponent } from './components/planet-page/planet-page.component';

const routes: Routes = [
  {path: 'planets', title: 'Planets', component: PlanetListComponent},
  {path: 'planet/:id', title: 'Planet', component: PlanetPageComponent},
  {path: '',   redirectTo: '/planets', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
