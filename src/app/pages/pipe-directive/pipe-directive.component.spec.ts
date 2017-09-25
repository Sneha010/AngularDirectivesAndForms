import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDirectiveComponent } from './pipe-directive.component';

describe('PipeDirectiveComponent', () => {
  let component: PipeDirectiveComponent;
  let fixture: ComponentFixture<PipeDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
