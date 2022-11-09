import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingModule } from '@nov9-technical-assessment/routing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingModule],
      declarations: [AppComponent],
    }).compileComponents();

    component = TestBed.createComponent(AppComponent);
    component.detectChanges();
  });

  it('should create the app', () => {
    const app = component.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'landing'`, () => {
    const app = component.componentInstance;
    expect(app.title).toEqual('landing');
  });
});
