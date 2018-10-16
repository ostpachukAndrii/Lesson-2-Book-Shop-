import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStylesComponent } from './inline-styles.component';

describe('InlineStylesComponent', () => {
  let component: InlineStylesComponent;
  let fixture: ComponentFixture<InlineStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
