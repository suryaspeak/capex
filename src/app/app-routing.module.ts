import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'approval',
    loadChildren: () => import('./approval/approval.module').then( m => m.ApprovalPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'dashbord',
    loadChildren: () => import('./dashbord/dashbord.module').then( m => m.DashbordPageModule)
  },
  {
    path: 'grpahmodal',
    loadChildren: () => import('./grpahmodal/grpahmodal.module').then( m => m.GrpahmodalPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then( m => m.GraphPageModule)
  },
  {
    path: 'modalpage',
    loadChildren: () => import('./modalpage/modalpage.module').then( m => m.ModalpagePageModule)
  },
  {
    path: 'landinglayer',
    loadChildren: () => import('./landinglayer/landinglayer.module').then( m => m.LandinglayerPageModule)
  },
  {
    path: 'modal2',
    loadChildren: () => import('./modal2/modal2.module').then( m => m.Modal2PageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'notdetails',
    loadChildren: () => import('./notdetails/notdetails.module').then( m => m.NotdetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'yearselect',
    loadChildren: () => import('./yearselect/yearselect.module').then( m => m.YearselectPageModule)
  },
  {
    path: 'singlegraph',
    loadChildren: () => import('./singlegraph/singlegraph.module').then( m => m.SinglegraphPageModule)
  },
  {
    path: 'linechart',
    loadChildren: () => import('./linechart/linechart.module').then( m => m.LinechartPageModule)
  },
  {
    path: 'groupgraph',
    loadChildren: () => import('./groupgraph/groupgraph.module').then( m => m.GroupgraphPageModule)
  },
  {
    path: 'top',
    loadChildren: () => import('./top/top.module').then( m => m.TopPageModule)
  },
  {
    path: 'assetgroup',
    loadChildren: () => import('./assetgroup/assetgroup.module').then( m => m.AssetgroupPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'reportlist',
    loadChildren: () => import('./reportlist/reportlist.module').then( m => m.ReportlistPageModule)
  },
  {
    path: 'budgetreport',
    loadChildren: () => import('./budgetreport/budgetreport.module').then( m => m.BudgetreportPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'confirmpassword',
    loadChildren: () => import('./confirmpassword/confirmpassword.module').then( m => m.ConfirmpasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
