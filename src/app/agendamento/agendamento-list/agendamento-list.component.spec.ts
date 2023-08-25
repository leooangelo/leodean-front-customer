import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoListComponent } from './agendamento-list.component';

describe('AgendamentoListComponent', () => {
  let component: AgendamentoListComponent;
  let fixture: ComponentFixture<AgendamentoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentoListComponent]
    });
    fixture = TestBed.createComponent(AgendamentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
