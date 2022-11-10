import { DetailEmployeComponent } from './detail-employe.component';
import {
  TestBed,
  TestBedStatic,
  ComponentFixture,
} from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { employeReducer } from '@nov9-technical-assessment/stores';
import { routes } from '../../route.module/route.module';
import { EmployeComponent } from '../employe.component/employe.component';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

describe('DetailEmployeComponent', () => {
  let container: TestBedStatic;
  let component: ComponentFixture<DetailEmployeComponent>;

  beforeEach(async () => {
    container = await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot([employeReducer]),
        RouterTestingModule.withRoutes(routes),
        NgHeroiconsModule,
      ],
      declarations: [DetailEmployeComponent, EmployeComponent],
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
    expect(template.querySelector('div')?.textContent).toContain('');
  });

  afterEach(async () => {
    await jest.clearAllMocks();
  });
});
