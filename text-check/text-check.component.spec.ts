import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCheckComponent } from './text-check.component';

describe('TextCheckComponent', () => {
  let component: TextCheckComponent;
  let fixture: ComponentFixture<TextCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
