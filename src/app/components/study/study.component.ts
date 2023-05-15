import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  
  @Input() training!: string;
  @Input() institution!: string;
  @Input() dateStart!: Date;
  @Input() dateEnd!: Date;
  
  ngOnInit(): void {
  }

}
