import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomatComponent } from './diplomat.component';

describe('DiplomatComponent', () => {
  let component: DiplomatComponent;
  let fixture: ComponentFixture<DiplomatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
