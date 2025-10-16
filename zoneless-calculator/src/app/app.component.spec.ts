import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should to be 3', () => {
    // variables a evalual
    const num1 = 1
    const num2 = 2

    // accion
    const result = num1 + num2

    // resultado esperado
    expect(result).toBe(3)
  });

  it(`should have the 'zoneless-calculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router-outlet', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('router-outlet'))?.not.toBeNull()
  });

  it('debería tener el id correcto en el enlace', () => {
    const debugEl = fixture.debugElement.query(By.css('[data-testid="beer-link"]'));
    const nativeEl: HTMLAnchorElement = debugEl.nativeElement;

    expect(nativeEl.getAttribute('data-testid')).toBe('beer-link');
  });
});
