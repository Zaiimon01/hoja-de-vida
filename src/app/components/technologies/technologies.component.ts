import { Component, Input } from '@angular/core';
import { TechnologyModel } from 'src/app/interfaces/technology.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent {
  @Input() technologies!: TechnologyModel[];
}
