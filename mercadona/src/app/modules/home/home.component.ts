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
  newTornillo: any = {};
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
    }, 2000);
    
    
  }

  clickAddTornillo(): void {

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '80em',
      height: '45em',
      data: {event: "add"},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.newTornillo = result;  
      } else {
        this.newTornillo = result;
      }
      
      console.log('The dialog was closed');
    });
  }

  recieveData(data: any) {
    if (data.event === 'delete') {
      this.deleteTornillo();
    } else if (data.event === 'order') {
      this.orderColumns(data);
    } else if (data.event === 'deleted') {
      setTimeout(() => {
        this.removeTornillo = false;  
      }, 1000);
      
    }
  }

  deleteTornillo() {
    
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
