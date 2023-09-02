import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearEmpleadosPage } from './crear-empleados.page';

describe('CrearEmpleadosPage', () => {
  let component: CrearEmpleadosPage;
  let fixture: ComponentFixture<CrearEmpleadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearEmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
