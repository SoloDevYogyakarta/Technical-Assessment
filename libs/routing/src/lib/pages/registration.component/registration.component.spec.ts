import { RegistrationComponent } from './registration.component';
import {
  TestBed,
  TestBedStatic,
  ComponentFixture,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from '@nov9-technical-assessment/shared/ui';

describe('RegistrationComponent', () => {
  let container: TestBedStatic;
  let component: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    container = await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [RegistrationComponent],
      providers: [NotificationService],
    }).compileComponents();

    component = TestBed.createComponent(RegistrationComponent);
    component.detectChanges();
  });

  it('should render snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it("should have as title 'RegistrationComponent'", () => {
    const template = component.componentInstance;
    expect(template.title).toEqual('RegistrationComponent');
  });

  it('should render title', () => {
    const template = component.nativeElement as HTMLElement;
    expect(template.querySelector('form')?.textContent).toContain(
      'Registration now !'
    );
  });

  afterEach(async () => {
    await jest.clearAllMocks();
  });
});
