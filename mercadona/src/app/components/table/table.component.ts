import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TornilloList } from 'src/app/data/tornillos.data';
import { Tornillo } from 'src/app/models/tornillo.model';
import { MatIconModule } from '@angular/material/icon';


@Component({
  standalone: true,
  imports: [ MatPaginatorModule, MatTableModule, MatIconModule],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'price', 'format', 'brand', 'action'];
  dataSource: MatTableDataSource<Tornillo> =  new MatTableDataSource();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() loggedIn: boolean = false;
  @Input() addTornillo: any = {};
  @Input() deleteTornillo: boolean = false;
  @Input() changeOrderColumns: string[] = [];
  @Output() tableAction = new EventEmitter<object>();

  removeTornilloId: string = '';


  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(TornilloList);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    if(this.loggedIn) {
      const table = document.getElementsByClassName('table-tornillos').item(0) as HTMLElement;
      const settings = document.getElementsByClassName('settings-section').item(0) as HTMLElement;
      settings.style.display = 'flex';
      table.style.display = 'block';
    }
    
    if(this.addTornillo.name != undefined && this.paginator) {
      this.addTornillo['id'] = this.dataSource['_data']._value.length;
      this.dataSource['_data'].value.push(this.addTornillo);
      this.paginator.length = this.dataSource['_data'].value.length;
      this.dataSource.paginator = this.paginator;
      this.addTornillo = {};
    }
    if(this.deleteTornillo) {
      this.dataSource['_data'].value.forEach((element: any, index: number, object: string[]) => {
        if(element.id === this.removeTornilloId) {
          object.splice(index,1);
        }
      });
      this.paginator.length = this.dataSource['_data'].value.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource._updateChangeSubscription();
      const data = {
        event: "deleted",
        data: ""
      };
      this.tableAction.emit(data);
    }
    if(this.changeOrderColumns.length > 0) {
      this.changeOrderColumns[4] = 'action';
      this.displayedColumns = this.changeOrderColumns;
    }
  }
  
  delete(element: any) {
    this.removeTornilloId = element.id;
    const data = {
      event: "delete",
      data: element.id
    }
    this.tableAction.emit(data);
  }

  orderColumn() {
    const data = {
      event: "order",
      data: this.displayedColumns.slice(0, 4)
    }
    this.tableAction.emit(data);
  }
}