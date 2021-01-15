import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOwnerComponent } from './ui-owner.component';

describe('UiOwnerComponent', () => {
  let component: UiOwnerComponent;
  let fixture: ComponentFixture<UiOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
