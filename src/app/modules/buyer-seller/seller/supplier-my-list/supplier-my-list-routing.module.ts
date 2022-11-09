import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSupplierMyListingComponent } from './page-supplier-my-listing/page-supplier-my-listing.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "my-listing"
    },
    {
        path: "my-listing",
        component: PageSupplierMyListingComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupplierMyListRoutingModule { } 
