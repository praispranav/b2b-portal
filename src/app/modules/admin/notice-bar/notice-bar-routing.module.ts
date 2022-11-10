import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNoticeBarAddComponent } from './page-notice-bar-add/page-notice-bar-add.component';


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "noticeBar"
    },
    {
        path: "noticeBar",
        component: PageNoticeBarAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NoticeBarRoutingModule { }
