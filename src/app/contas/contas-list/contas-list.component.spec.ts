import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasListComponent } from './contas-list.component';

describe('ContasListComponent', () => {
  let component: ContasListComponent;
  let fixture: ComponentFixture<ContasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContasListComponent]
    });
    fixture = TestBed.createComponent(ContasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
