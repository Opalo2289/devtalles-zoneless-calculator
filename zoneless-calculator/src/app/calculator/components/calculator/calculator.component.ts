import { ChangeDetectionStrategy, Component, computed, HostListener, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export default class CalculatorComponent {
  private _calculatorService = inject(CalculatorService);
  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  public resultText = computed(() => this._calculatorService.resultText());
  public subResultText = computed(() => this._calculatorService.subResultText())
  public lastOperator = computed(() => this._calculatorService.lastOperator())


  handleClick(key: string) {
    // console.log({key})
    this._calculatorService.construcNumber(key);
  }

  //esto es una forma de obtener el evento de las teclas antiguo
  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {


    const keyEquivalents: Record<string, string> = {
      Backspace: 'Backspace',
      c: 'C',
      'Invcalid input x': '*',
      'Invcalid input ÷': '÷',
      Enter: '=',
      x:'+/-'
    }

    const key = event.key
    const keyValue = keyEquivalents[key] ?? key

    this.handleClick(keyValue)
    console.log(event.key)
    this.calculatorButtons().forEach((button) => {
      button.keyBoardPressedStyle(keyValue)
    });
  }


}
