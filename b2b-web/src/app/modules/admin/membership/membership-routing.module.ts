import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMembershipComponent } from './add-membership/add-membership.component';
import { ListMembershipComponent } from './list-membership/list-membership.component';
import { MembershipComponent } from './membership.component';

const routes: Routes = [
    {
        path: '',
        component: MembershipComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: ListMembershipComponent
            },
            {
                path: 'manage',
                component: AddMembershipComponent
            }
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }