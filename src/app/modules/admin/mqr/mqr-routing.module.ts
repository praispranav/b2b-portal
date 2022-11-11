import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAdminMqrComponent } from './page-admin-mqr/page-admin-mqr.component';


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "mqr-list"
    },
    {
        path: "mqr-list",
        component: PageAdminMqrComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MqrRoutingModule { }
