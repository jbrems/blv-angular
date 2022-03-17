import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlvTitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: BlvTitleComponent;
  let fixture: ComponentFixture<BlvTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlvTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlvTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
