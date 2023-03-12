import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loggedIn: boolean = false;
  spinner: boolean = false;

  constructor(public dialog: MatDialog) {
    
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
    }, 0);
    
    
  }

  clickAddTornillo(): void {

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '80em',
      height: '45em',
      data: {event: "add"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addTornillo() {

  }

  recieveData(data: any) {
    if (data.event === 'delete') {
      this.deleteTornillo(data.data);
    } else if (data.event === 'order') {
      this.orderColumns();
    }
  }
  deleteTornillo(idTornillo: string) {
    console.log("event", idTornillo);
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '40em',
      height: '15em',
      data: {event: "delete"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  orderColumns() {
    
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '70em',
      height: '40em',
      data: {event: "order"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
