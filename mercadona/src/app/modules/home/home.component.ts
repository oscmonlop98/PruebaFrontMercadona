import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loggedIn: boolean = false;
  spinner: boolean = false;

  constructor() {
    
  }

  reviewTornillos () {
    const card = document.getElementsByClassName('info').item(0) as HTMLElement;
    card.style.display = 'none';
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
      if (!this.loggedIn) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    }, 2000);
    
    
  }

}
