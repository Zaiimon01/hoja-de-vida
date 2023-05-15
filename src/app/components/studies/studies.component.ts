import { Component, Input } from '@angular/core';
import { StudyAcademic } from 'src/app/interfaces/study.model';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {
  @Input() studies!: StudyAcademic[];
}
