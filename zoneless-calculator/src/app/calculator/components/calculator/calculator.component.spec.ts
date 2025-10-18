



import { ComponentFixture, TestBed } from '@angular/core/testing';
import CalculatorComponent from './calculator.component';
import { CalculatorService } from '@/calculator/services/calculator.service';
import { By } from '@angular/platform-browser';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';


class calculatorServiceMock {
  public resultText = jasmine.createSpy('resultText').and.returnValue('100')
  public subResultText = jasmine.createSpy('subResultText').and.returnValue('0')
  public lastOperator = jasmine.createSpy('lastOperator').and.returnValue('+')

  public construcNumber = jasmine.createSpy('construcNumber')
}

describe('CalculatorComponent', () => {

  let fixture: ComponentFixture<CalculatorComponent>
  let compiled: HTMLElement
  let component: CalculatorComponent;
  let mockCalculatorService: calculatorServiceMock

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
      providers: [
        { provide: CalculatorService, useClass: calculatorServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    mockCalculatorService = TestBed.inject(CalculatorService) as unknown as calculatorServiceMock

    // fixture.detectChanges()
  });

  it('should create the app', () => {
    console.log(compiled)
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('valores pasados por la clase emulando el servicio', () => {

    mockCalculatorService.resultText.and.returnValue('20')

    fixture.detectChanges()

    expect(component.resultText()).toBe('20');
    expect(component.subResultText()).toBe('0');
    expect(component.lastOperator()).toBe('+');
  });


  it('calculator component deberia tener 19 botones', () => {
    expect(component.calculatorButtons().length).toBe(19)
  });

  it('calculator component deberia tener 19 botones DEBUG', () => {
    const buttonsElements = compiled.querySelectorAll('calculator-button')

    const buttonsElementsDirective = fixture.debugElement.queryAll(
      By.directive(CalculatorButtonComponent)
    )
    expect(component.calculatorButtons().length).toBe(19)

    expect(buttonsElements[0]?.textContent?.trim()).toBe('C')


    // console.log({buttonsElements})
    // console.log({buttonsElementsDirective})

  });

  it('deberia presionar la tecla correcta', () => {

    const eventEnter = new KeyboardEvent('keyup', { key: 'Backspace' });
    document.dispatchEvent(eventEnter);

    expect(mockCalculatorService.construcNumber).toHaveBeenCalledWith('Backspace');
  });


});
