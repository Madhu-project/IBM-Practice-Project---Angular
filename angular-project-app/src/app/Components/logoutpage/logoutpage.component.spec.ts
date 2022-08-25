import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutpageComponent } from './logoutpage.component';

describe('LogoutpageComponent', () => {
  let component: LogoutpageComponent;
  let fixture: ComponentFixture<LogoutpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Verifying logout text of logout page component', () => {
    const element: HTMLElement = fixture.nativeElement;
    const actualcontent = element.querySelector('p');
    expect(actualcontent?.textContent).toEqual(
      'You have successfully Logged out :)'
    );
  });
});
