import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMembershipAddComponent } from './page-membership-add/page-membership-add.component';
import { PageMembershipEditComponent } from './page-membership-edit/page-membership-edit.component';
import { PageMembershipListComponent } from './page-membership-list/page-membership-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'membership-list',
    pathMatch: 'full',
  },
  {
    path: 'membership-add',
    component: PageMembershipAddComponent,
  },
  {
    path: 'membership-edit',
    component: PageMembershipEditComponent,
  },
  {
    path: 'membership-list',
    component: PageMembershipListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipRoutingModule {}
