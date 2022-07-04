import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.scss'],
})
export class CertificateListComponent {
  certificates = [
    {
      title: 'NestJS',
      iconName: 'card_membership',
      filePath:
        'assets/documents/certificate-of-completion-for-nestjs-fundamentals.pdf',
    },
  ];

  constructor() {}

  viewFile({ index }: { index: number }) {
    window.open(this.certificates[index].filePath);
  }
}
