import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AgentProfileRoutingModule } from "./agent-profile-routing.module";
import { AgentProfileAddComponent } from "./agent-profile-add/agent-profile-add.component";
import { AgentProfileViewComponent } from "./agent-profile-view/agent-profile-view.component";
import { AgentProfileListComponent } from "./agent-profile-list/agent-profile-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AgentProfileAddComponent,
    AgentProfileViewComponent,
    AgentProfileListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AgentProfileRoutingModule,
  ],
})
export class AgentProfileModule {}
