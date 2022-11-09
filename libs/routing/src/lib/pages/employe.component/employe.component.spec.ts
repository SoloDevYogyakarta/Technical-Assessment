import { EmployeComponent } from './employe.component';
import {
  TestBed,
  TestBedStatic,
  ComponentFixture,
} from '@angular/core/testing';

describe('EmployeComponent', () => {
  let container: TestBedStatic;
  let component: ComponentFixture<EmployeComponent>;

  beforeEach(async () => {
    container = await TestBed.configureTestingModule({
      imports: [],
      declarations: [EmployeComponent],
    }).compileComponents();

    component = TestBed.createComponent(EmployeComponent);
    component.detectChanges();
  });

  it('should render snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it("should have as title 'EmployeComponent'", () => {
    const template = component.componentInstance;
    expect(template.title).toEqual('EmployeComponent');
  });

  it('should render title', () => {
    const template = component.nativeElement as HTMLElement;
    expect(template.querySelector('div')?.textContent).toContain(
      'EmployeComponent'
    );
  });

  afterEach(async () => {
    await jest.clearAllMocks();
  });
});
