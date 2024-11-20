import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CteacherComponent } from './cteacher.component';

describe('CteacherComponent', () => {
  let component: CteacherComponent;
  let fixture: ComponentFixture<CteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CteacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
