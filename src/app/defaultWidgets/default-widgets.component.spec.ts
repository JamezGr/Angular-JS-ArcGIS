import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWidgetsComponent } from './default-widgets.component';

describe('DefaultWidgetsComponent', () => {
  let component: DefaultWidgetsComponent;
  let fixture: ComponentFixture<DefaultWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
