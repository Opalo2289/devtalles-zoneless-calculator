



import { ComponentFixture, TestBed } from '@angular/core/testing';
import CalculatorComponent from './calculator.component';
import { CalculatorService } from '@/calculator/services/calculator.service';


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

    expect(component.resultText()).toBe('100');
    expect(component.subResultText()).toBe('0');
    expect(component.lastOperator()).toBe('+');
  });

});
