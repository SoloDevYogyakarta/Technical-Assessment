import { LoginComponent } from './login.component';
import {
  TestBed,
  TestBedStatic,
  ComponentFixture,
} from '@angular/core/testing';

describe('LoginComponent', () => {
  let container: TestBedStatic;
  let component: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    container = await TestBed.configureTestingModule({
      imports: [],
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
    expect(template.querySelector('div')?.textContent).toContain(
      'LoginComponent'
    );
  });

  afterEach(async () => {
    await jest.clearAllMocks();
  });
});
