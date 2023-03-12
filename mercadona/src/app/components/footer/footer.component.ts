import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ MatToolbarModule, MatButtonModule, MatIconModule, CommonModule ],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() loggedIn: boolean = false;
  @Output() myData = new EventEmitter<string>();

  openModal() {
    console.log("casdf");
    this.myData.emit('open');
  }
}
