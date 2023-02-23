import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentProfileAddComponent } from './agent-profile-add/agent-profile-add.component';
import { AgentProfileListComponent } from './agent-profile-list/agent-profile-list.component';
import { AgentProfileViewComponent } from './agent-profile-view/agent-profile-view.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"add-profile"
  },
  {
    path:"add-profile",
    component:AgentProfileAddComponent
  },
  {
    path:"list",
    component:AgentProfileListComponent
  },
  {
    path:"view",
    component:AgentProfileViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentProfileRoutingModule { }
