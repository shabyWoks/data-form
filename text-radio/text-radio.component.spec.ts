import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRadioComponent } from './text-radio.component';

describe('TextRadioComponent', () => {
  let component: TextRadioComponent;
  let fixture: ComponentFixture<TextRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
