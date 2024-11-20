import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstudentComponent } from './cstudent.component';

describe('CstudentComponent', () => {
  let component: CstudentComponent;
  let fixture: ComponentFixture<CstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CstudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
