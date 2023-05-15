import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diplomat',
  templateUrl: './diplomat.component.html',
  styleUrls: ['./diplomat.component.css']
})
export class DiplomatComponent implements OnInit {

  @Input() name!: string;
  @Input() date!: string;
  @Input() duration!: string;

  ngOnInit(): void {
  }

}
 