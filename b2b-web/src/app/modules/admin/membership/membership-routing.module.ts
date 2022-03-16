import { EditMembershipComponent } from './edit-membership/edit-membership.component';
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
                redirectTo: 'membership-list',
                pathMatch: 'full'
            },
            {
                path: 'membership-list',
                component: ListMembershipComponent
            },
            {
                path: 'add-membership',
                component: AddMembershipComponent
            },

            {
                path: 'edit-membership',
                component: EditMembershipComponent
            }
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
