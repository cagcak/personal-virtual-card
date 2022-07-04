import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CertificatesRoutingModule } from './certificates-routing.module';
import {
  CertificateItemComponent,
  CertificateListComponent,
} from './components';

@NgModule({
  declarations: [CertificateListComponent, CertificateItemComponent],
  imports: [SharedModule, CertificatesRoutingModule],
})
export class CertificatesModule {}
