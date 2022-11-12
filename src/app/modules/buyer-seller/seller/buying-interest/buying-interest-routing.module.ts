import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBuyingInterestComponent } from './page-buying-interest/page-buying-interest.component';


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "buying-interest"
    },
    {
        path: "buying-interest",
        component: PageBuyingInterestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuyingInterestRoutingModule { }
