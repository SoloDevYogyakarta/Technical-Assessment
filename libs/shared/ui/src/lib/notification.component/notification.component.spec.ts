import { NotificationComponent } from './notification.component';
import {
  TestBed,
  TestBedStatic,
  ComponentFixture,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

describe('NotificationComponent', () => {
  let container: TestBedStatic;
  let component: ComponentFixture<NotificationComponent>;

  beforeEach(async () => {
    container = await TestBed.configureTestingModule({
      imports: [NgHeroiconsModule],
      declarations: [NotificationComponent],
    }).compileComponents();

    component = TestBed.createComponent(NotificationComponent);
    component.detectChanges();
  });

  it('should render snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it("should have as title 'NotificationComponent'", () => {
    const template = component.componentInstance;
    template.open = 1;
    template.title = 'Success';
    template.message = 'Created notification';
    template.status = true;
    component.detectChanges();
    expect(template.title).toEqual('Success');
  });

  it('should render notification', () => {
    const fixture = component.componentInstance;
    fixture.open = 1;
    fixture.title = 'Success';
    fixture.message = 'Created notification';
    fixture.status = true;
    component.detectChanges();
    const fixtures = component.debugElement.query(
      By.css('#notification-title-testid')
    );
    const template = fixtures.nativeElement as HTMLElement;
    expect(template.textContent).toContain('Success');
  });

  afterEach(async () => {
    await jest.clearAllMocks();
  });
});
