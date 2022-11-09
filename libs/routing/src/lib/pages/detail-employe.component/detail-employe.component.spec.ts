import { DetailEmployeComponent } from './detail-employe.component';
import {
  TestBed,
  TestBedStatic,
  ComponentFixture,
} from '@angular/core/testing';

describe('DetailEmployeComponent', () => {
  let container: TestBedStatic;
  let component: ComponentFixture<DetailEmployeComponent>;

  beforeEach(async () => {
    container = await TestBed.configureTestingModule({
      imports: [],
      declarations: [DetailEmployeComponent],
    }).compileComponents();

    component = TestBed.createComponent(DetailEmployeComponent);
    component.detectChanges();
  });

  it('should render snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it("should have as title 'DetailEmployeComponent'", () => {
    const template = component.componentInstance;
    expect(template.title).toEqual('DetailEmployeComponent');
  });

  it('should render title', () => {
    const template = component.nativeElement as HTMLElement;
    expect(template.querySelector('div')?.textContent).toContain(
      'DetailEmployeComponent'
    );
  });

  afterEach(async () => {
    await jest.clearAllMocks();
  });
});
