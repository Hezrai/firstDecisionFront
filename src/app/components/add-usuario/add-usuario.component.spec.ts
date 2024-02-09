import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsuarioComponentComponent } from './add-usuario.component';

describe('AddUsuarioComponent', () => {
  let component: AddTutorialComponent;
  let fixture: ComponentFixture<AddUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
