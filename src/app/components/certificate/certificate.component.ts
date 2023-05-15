import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  @Input() name!: string;
  @Input() adress!: string;
  @Input() serial_number!: string;
  @Input() Date_export_certificate!: string;

  ngOnInit(): void {
  }

}
