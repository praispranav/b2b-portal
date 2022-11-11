import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageProductVerificationComponent } from './page-product-verification/page-product-verification.component';


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "verification-list"
    },
    {
        path: "verification-list",
        component: PageProductVerificationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductVerificationRoutingModule { }
