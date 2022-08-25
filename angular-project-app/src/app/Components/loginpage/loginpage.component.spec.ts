import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageComponent } from './loginpage.component';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('Verifying Username label of the login Page component', () => {
    const element: HTMLElement = fixture.nativeElement;
    const actualusername = element.querySelector('#username');
    expect(actualusername?.textContent).toEqual('User Name');
  });

  it('Verifying Password label of the login Page component', () => {
    const element: HTMLElement = fixture.nativeElement;
    const actualpassword = element.querySelector('#password');
    expect(actualpassword?.textContent).toEqual('Password');
  });
});
