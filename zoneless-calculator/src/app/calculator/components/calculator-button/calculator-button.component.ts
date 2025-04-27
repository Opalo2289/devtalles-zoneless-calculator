import { Attribute, ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, OnInit, output, viewChild } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    Attribute: 'Hola',
    'data-size': 'XL'
  }
})

export class CalculatorButtonComponent {
  //public isCommand = input( false) //Ya angular acepta esto pero si no, se puede utilizar esto:

  public onClickButton = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button')

  public isCommand = input( false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value
  })

  public isWhiteText = input( false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value
  })

  public isDoubleSize = input( false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value
  })

  handleClickl() {
    if(!this.contentValue()?.nativeElement.innerText) {
      return
    }
    const value = this.contentValue()!.nativeElement.innerText
    console.log({value})
    this.onClickButton.emit(value)
  }

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize()
  }

}
