import { BaseComponent } from './base.component';
import {
  TestBed,
  TestBedStatic,
  ComponentFixture,
} from '@angular/core/testing';

describe('BaseComponent', () => {
  let container: TestBedStatic;
  let component: ComponentFixture<BaseComponent>;

  beforeEach(async () => {
    container = await TestBed.configureTestingModule({
      imports: [],
      declarations: [BaseComponent],
    }).compileComponents();

    component = TestBed.createComponent(BaseComponent);
    component.detectChanges();
  });

  it('should render snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it("should have as title 'BaseComponent'", () => {
    const template = component.componentInstance;
    expect(template.title).toEqual('BaseComponent');
  });

  it('should render title', () => {
    const template = component.nativeElement as HTMLElement;
    expect(template.querySelector('div')?.textContent).toContain(
      'BaseComponent'
    );
  });

  afterEach(async () => {
    await jest.clearAllMocks();
  });
});
