import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  @Input() logo!: string;
  @Input() name!: string;
  @Input() level!: number;
  
  ngOnInit(): void {
  }
 
}
