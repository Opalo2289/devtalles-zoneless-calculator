import { AppComponent } from "@/app.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CalculatorService } from "../services/calculator.service";

//esto es para evaluar servicios
describe('CalculatorService', () => {

  let service: CalculatorService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CalculatorService)
  });

  it('should create the app', () => {
    expect(service).toBeTruthy();
  });

  it("default value", () => {
    expect(service.resultText()).toBe('0')
    expect(service.subResultText()).toBe('0')
    expect(service.lastOperator()).toBe('÷')
  })

  it("when c is pressed", () => {

    service.resultText.set('1827')
    service.subResultText.set('27843')
    service.lastOperator.set('*')


    service.construcNumber('C')

    expect(service.resultText()).toBe('0')
    expect(service.subResultText()).toBe('0')
    expect(service.lastOperator()).toBe('+')
  })

  it("deberia calcular el valor correcto", () => {

    service.construcNumber('1')
    service.construcNumber('+')
    service.construcNumber('1')
    service.construcNumber('=')

    expect(service.resultText()).toBe('2')
  })

  it("deberia calcular el valor correcto prueba 2", () => {

    service.construcNumber('1')
    service.construcNumber('+/-')

    expect(service.resultText()).toBe('-1')

  })

});
