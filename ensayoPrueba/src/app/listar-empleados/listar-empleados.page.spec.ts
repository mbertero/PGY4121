import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarEmpleadosPage } from './listar-empleados.page';

describe('ListarEmpleadosPage', () => {
  let component: ListarEmpleadosPage;
  let fixture: ComponentFixture<ListarEmpleadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarEmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
