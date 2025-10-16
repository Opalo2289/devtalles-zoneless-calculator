
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorButtonComponent } from './calculator-button.component';
import { Component } from '@angular/core';


@Component({
  standalone: true,
  imports: [CalculatorButtonComponent], // Importa el componente que deseas probar
  template: `<calculator-button #button isDoubleSize="true">
    <span class="content-project">test contente</span>
  </calculator-button>`
})
class HostComponent { }


describe('CalculatorButtonComponent', () => {

  let fixture: ComponentFixture<CalculatorButtonComponent>
  let compiled: HTMLElement
  let component: CalculatorButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorButtonComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create the app', () => {
    console.log(compiled)
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('se espera que tenga una clase w-1/4', () => {

    const cssClass = compiled.classList.value.split(' ')

    expect(cssClass).toContain('w-1/4')
    expect(component.isDoubleSize()).toBeFalse()

  });

  it('se espera que NO tenga una clase w-1/4', () => {

    fixture.componentRef.setInput('isDoubleSize', true)

    fixture.detectChanges()
    const cssClass = compiled.classList.value.split(' ')

    expect(cssClass).toContain('w-2/4')
    expect(component.isDoubleSize()).toBeTrue()

  });

  it('cuando el onClick es llamado', () => {

    spyOn(component.onClickButton, 'emit')
    component.handleClickl()
    expect(component.onClickButton.emit).not.toHaveBeenCalled()
    expect(component.onClickButton.emit).not.toHaveBeenCalledWith('') //espera argumento

  });

  it('deberia ser presionado en true y despues en false cuando keyBoardPressStyle es llamado', (done) => {

    component.contentValue()!.nativeElement.innerText = '5'

    component.keyBoardPressedStyle('5')

    expect(component.isPressed()).toBeTrue();

    setTimeout(() => {
      expect(component.isPressed()).toBeFalse();
      done() //Llamar a done() para indicar que la prueba asíncrona ha terminado, en resumen espera a que se resuelva la logica asíncrona
    }, 100)

  });

  it('prueba de contenido proyectado', () => {

    const testFixture = TestBed.createComponent(HostComponent);
    compiled = testFixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.content-project')?.textContent).toBe('test contente');
    expect(compiled.querySelector('.content-project')?.textContent).not.toBeNull();

  });



})
