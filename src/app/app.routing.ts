import { Routes } from "@angular/router";

import {
  AdminLayoutComponent,
  AgentLayoutComponent,
  AssociateLayoutComponent,
  BlankLayoutComponent,
  BuyerLayoutComponent,
  SellerLayoutComponent,
} from "./@pages/layouts";

export const AppRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "seller",
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    loadChildren: "./modules/admin/admin.module#AdminModule",
  },
  {
    path: "agent",
    component: AgentLayoutComponent,
    loadChildren: "./modules/agent/agent.module#AgentModule",
  },
  {
    path: "associate",
    component: AssociateLayoutComponent,
    loadChildren: "./modules/associate/associate.module#AssociateModule",
  },
  {
    path: "buyer",
    component: BuyerLayoutComponent,
    loadChildren: "./modules/buyer-seller/buyer.module#BuyerModule",
  },
  {
    path: "seller",
    component: SellerLayoutComponent,
    loadChildren: "./modules/buyer-seller/seller.module#SellerModule",
  },
  {
    path: "user-auth",
    component: BlankLayoutComponent,
    loadChildren: "./modules/user-auth/user-auth.module#UserAuthModule",
  },
  {
    path: "b2b",
    component: BlankLayoutComponent,
    loadChildren: "./modules/view/view.module#ViewModule",
  },
  {
    path: "**",
    redirectTo: "b2b",
  },
];
