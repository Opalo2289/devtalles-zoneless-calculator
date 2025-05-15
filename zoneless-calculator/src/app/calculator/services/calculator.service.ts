import { NumberSymbol } from '@angular/common';
import { Injectable, signal } from '@angular/core';

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operator = ['+', '-', '*', '/']
const specialOperator = ['+/-', '%', '.', '=', 'C', 'Backspace']

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public resultText = signal('0');
  public subResultText = signal('0');
  public lastOperator = signal('÷');

  public construcNumber(value: string): void {
    if (![...number, ...operator, ...specialOperator].includes(value)) {
      console.log('Invcalid input', value)
      return;
    }

    if (value === '=') {
      console.log('Calcular resultad0', value)
      return;
    }

    // limpiar resultados
    if (value === 'C') {
      this.resultText.set('0')
      this.subResultText.set('0')
      this.lastOperator.set('+')
      return;
    }

    //Backspace
    if (value === 'Backspace') {
      if (this.resultText() === '0') return
      if (this.resultText().length === 1) {
        this.resultText.set('0')
        return
      }
      this.resultText.update(v => v.slice(0, -1))
      return
    }

    //aplicar operador
    if (operator.includes(value)) {
      this.lastOperator.set(value)
      this.subResultText.set(this.resultText());
      this.resultText.set('0')
    }

    // lmitar numero de caracteres
    if (this.resultText().length > 10) {
      console.log('ha exedido')
      return
    }


    // validar punto decimal
    if (value == '.' && !this.resultText().includes('.')) {
      if (this.resultText() === '0' || this.resultText() === '') {
        this.resultText.set('0.')
        return
      }
      this.resultText.update(text => text + '.')
      return
    }

    // manejo del cero inicial
    if (value === '0' && (this.resultText() === '0' || this.resultText() === '-0')) {
      return
    }

    // cambiar signo
    if (value === '+/-') {
      if (this.resultText().includes('-')) {
        this.resultText.update((text) => text.slice(1))
        return
      }
      this.resultText.update((text) => '-' + text)
      return
    }

    if (number.includes(value)) {
      if (this.resultText() === '0') {
        this.resultText.set(value)
        return
      }

      if (this.resultText() === '-0') {
        this.resultText.set('-' + value)
        return
      }
      this.resultText.update((text) => text + value)
      return
    }
    // Numeros



  }

}
