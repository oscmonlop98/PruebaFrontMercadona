import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ToolbarComponent } from './../../components/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TableComponent } from 'src/app/components/table/table.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HomeRoutingModule,
        ToolbarComponent,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        TableComponent,
        FooterComponent,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        DragDropModule,
        BrowserAnimationsModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
