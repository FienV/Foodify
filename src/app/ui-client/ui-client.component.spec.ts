import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiClientComponent } from './ui-client.component';

describe('UiClientComponent', () => {
  let component: UiClientComponent;
  let fixture: ComponentFixture<UiClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
