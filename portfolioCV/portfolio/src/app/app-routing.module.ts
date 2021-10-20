import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { ProgramingComponent } from './programing/programing.component';
import { DesignComponent} from './design/design.component'

const routes: Routes = [
  {
    path: 'explore', component: ExploreComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  { path: '', redirectTo:'home', pathMatch: 'full' },
  {path: 'programing', component: ProgramingComponent},
  {path: 'design', component: DesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
