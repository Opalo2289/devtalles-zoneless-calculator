import { Attribute, ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, OnInit, output, signal, viewChild } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    '[class.w-2/4]':'isDoubleSize()',
    '[class.w-1/4]':'!isDoubleSize()'
    ////Attribute: 'Hola',
    ////'data-size': 'XL'
  }
})

export class CalculatorButtonComponent {
  //public isCommand = input( false) //Ya angular acepta esto pero si no, se puede utilizar esto:

  public isPressed = signal(false)
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

  //Esto puede ser reemplazado con una clase arriba en el host directamente
  // @HostBinding('class.w-2/4') get commandStyle() {
  //   return this.isDoubleSize()
  // }

  keyBoardPressedStyle(key:string) {
    if(!this.contentValue)return
    const value = this.contentValue()!.nativeElement.innerText

    if(value != key  ) return
    this.isPressed.set(true)
    setTimeout(() => {
      this.isPressed.set(false)
    }, 100)
  }

}
