import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CertificateItemComponent,
  CertificateListComponent,
} from './components';

const routes: Routes = [
  {
    path: 'listings',
    component: CertificateListComponent,
  },
  {
    path: ':id',
    component: CertificateItemComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listings',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificatesRoutingModule {}
