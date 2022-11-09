import { LoginComponent } from './login.component';
import {
  TestBed,
  TestBedStatic,
  ComponentFixture,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let container: TestBedStatic;
  let component: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    container = await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
    }).compileComponents();

    component = TestBed.createComponent(LoginComponent);
    component.detectChanges();
  });

  it('should render snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it("should have as title 'LoginComponent'", () => {
    const template = component.componentInstance;
    expect(template.title).toEqual('LoginComponent');
  });

  it('should render title', () => {
    const template = component.nativeElement as HTMLElement;
    expect(template.querySelector('form')?.textContent).toContain(
      'Log in now !'
    );
  });

  afterEach(async () => {
    await jest.clearAllMocks();
  });
});
