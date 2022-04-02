import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyInfoComponent } from './company-info/company-info.component';


const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: '',
      //   pathMatch: 'full'
      // },

      {
        path: '',
        component: CompanyInfoComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
