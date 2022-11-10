import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFaqAddComponent } from './page-faq-add/page-faq-add.component';


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "faq"
    },
    {
        path: "faq-add",
        component: PageFaqAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaqRoutingModule { }
