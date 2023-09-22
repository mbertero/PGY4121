import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperaPassPage } from './recupera-pass.page';

describe('RecuperaPassPage', () => {
  let component: RecuperaPassPage;
  let fixture: ComponentFixture<RecuperaPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperaPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
