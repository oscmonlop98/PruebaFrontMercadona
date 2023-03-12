import { Component, Input, SimpleChanges } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ MatToolbarModule, MatButtonModule, MatIconModule, CommonModule ],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {

  @Input() loggedIn: boolean = false;

}
