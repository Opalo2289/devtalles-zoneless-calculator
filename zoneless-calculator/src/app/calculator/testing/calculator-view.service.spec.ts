
import { ComponentFixture, TestBed } from '@angular/core/testing';
import calculatorViewComponent from '../views/calculator-view/calculator-view.component';

describe('calculatorViewComponent', () => {

  let fixture: ComponentFixture<calculatorViewComponent>
  let compiled: HTMLElement
  let component: calculatorViewComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [calculatorViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(calculatorViewComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('deberia tener la etiqueta calculator', () => {
    expect(compiled.querySelector('calculator')).not.toBeNull()
  });

  it('deberia tener css basico', () => {
    const divElement = compiled.querySelector("div")
    const divClasses = divElement?.classList.value.split(' ')
    const shouldHave = 'w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden'.split(' ')

    shouldHave.forEach(className => {
      expect(divClasses).toContain(className)
    })

  });

});
