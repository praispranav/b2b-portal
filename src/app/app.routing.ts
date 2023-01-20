import { Routes } from "@angular/router";
import { AuthGuard } from './core/guards/auth.guard';
import { UserGuard } from './core/guards/user.guard';
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
    canActivate: [UserGuard],
    data: {
      role: 'admin'
    },
    component: AdminLayoutComponent,
    loadChildren: "./modules/admin/admin.module#AdminModule",
  },
  {
    path: "agent",
    // canActivate: [UserGuard],
    data: {
      role: 'agent'
    },
    component: AgentLayoutComponent,
    loadChildren: "./modules/agent/agent.module#AgentModule",
  },
  {
    path: "associate",
    // canActivate: [UserGuard],
    data: {
      role: 'associate'
    },
    component: AssociateLayoutComponent,
    loadChildren: "./modules/associate/associate.module#AssociateModule",
  },
  {
    path: "buyer",
    canActivate: [UserGuard],
    data: {
      role: 'buyer'
    },
    component: BuyerLayoutComponent,
    loadChildren: "./modules/buyer-seller/buyer.module#BuyerModule",
  },
  {
    path: "seller",
    canActivate: [UserGuard],
    data: {
      role: 'seller'
    },
    component: SellerLayoutComponent,
    loadChildren: "./modules/buyer-seller/seller.module#SellerModule",
  },
  {
    path: "buyer-seller",
    canActivate: [UserGuard],
    data: {
      role: 'buyer-seller'
    },
    component: SellerLayoutComponent,
    loadChildren: "./modules/buyer-seller/seller.module#SellerModule",
  },
  {
    path: "user-auth",
    canActivate: [AuthGuard],
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
