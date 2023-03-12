import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxComponent } from './dialog-box.component';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

describe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ DialogBoxComponent ],
      providers: [MatDialogRef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
