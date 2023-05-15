import { Component, Input, OnInit } from '@angular/core';
interface SocialNetwork {
  display: string;
  link: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentImg = 'assets/img/perfil.png';
  @Input() img!: string;
  @Input() name!: string;
  @Input() email!: string;
  @Input() phone!: string;
  @Input() direction!: string;
  @Input() socialNetworks!: Array<SocialNetwork>;

  ngOnInit(): void {
    if (this.img) {
      this.currentImg = this.img;
    }
  }
}
