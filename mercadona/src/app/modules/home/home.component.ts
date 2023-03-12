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
  newTornillo: object = {};
  removeTornillo: boolean = false;
  newOrderColumns: string[] = [];

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
      this.newTornillo = result;
      console.log(result);
      console.log('The dialog was closed');
    });
  }

  addTornillo() {

  }

  recieveData(data: any) {
    if (data.event === 'delete') {
      this.deleteTornillo(data.data);
    } else if (data.event === 'order') {
      this.orderColumns(data);
    }
  }

  deleteTornillo(idTornillo: string) {
    console.log("event", idTornillo);
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      maxWidth: '50em',
      maxHeight: '20em',
      data: {event: "delete"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.removeTornillo = result;
      }
      console.log('The dialog was closed');
    });
  }

  orderColumns(data: any) {
    
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '75em',
      height: '50em',
      data: {event: "order", data: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.newOrderColumns = result;
      }
      console.log('The dialog was closed');
    });
  }


}
