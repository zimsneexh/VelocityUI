import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { VMListComponent } from './vmlist/vmlist.component';
import { InstallMediaComponent } from './install-media/install-media.component';
import { VMInfoComponent } from './vminfo/vminfo.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'vmlist', component: VMListComponent },
  { path: 'installmedia', component: InstallMediaComponent },
  { path: 'vminfo/:name', component: VMInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
