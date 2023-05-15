import { Component } from '@angular/core';
import { TechnologyModel } from './interfaces/technology.model';
import { StudyAcademic } from './interfaces/study.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hoja-de-vida';

  constructor() {
    this.technologies = [
      {
        name: "wordpress",
        level: 2,
        logo: "assets/img/logo_wordpress.png"
      },
      {
        name: "angular",
        level: 1.5,
        logo: "assets/img/logo_angular.png"
      }
    ]
    this.studies = [
      {
        training: "Basica Primaria",
        institution: "Instituto Tecnico San Rafael",
        dateStart: new Date (Date.parse("02/02/2007")),
        dateEnd: new Date (Date.parse("11/28/2013")),
      }
    ]
  }

  technologies: TechnologyModel []
  studies: StudyAcademic [] 

}
