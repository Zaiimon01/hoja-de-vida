import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  @Input() name!: string;
  @Input() phone!: string;
  @Input() adress!: string;
  @Input() email!: string;
  @Input() name1!: string;
  @Input() phone1!: string;
  @Input() adress1!: string;
  @Input() email1!: string;

  ngOnInit(): void {
  }

}
