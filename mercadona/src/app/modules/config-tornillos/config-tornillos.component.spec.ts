import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTornillosComponent } from './config-tornillos.component';

describe('ConfigTornillosComponent', () => {
  let component: ConfigTornillosComponent;
  let fixture: ComponentFixture<ConfigTornillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigTornillosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigTornillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
