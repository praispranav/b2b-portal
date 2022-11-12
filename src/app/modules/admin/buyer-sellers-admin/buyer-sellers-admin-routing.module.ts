import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBuyerSellersAdminComponent } from './page-buyer-sellers-admin/page-buyer-sellers-admin.component';


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "myList"
    },
    {
        path: "myList",
        component: PageBuyerSellersAdminComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuyerSellersAdminRoutingModule { }
