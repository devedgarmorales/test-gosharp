import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css',
})
export class TraductorComponent {
  num_ingresado!: number;
  arr_conversion: { input: number; output: string }[] = [];

  arabigoAromano() {

    const num_romanos: { [key: number]: string } = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
    };

    let num = this.num_ingresado;

    let resultado: string = '';
    const keys = Object.keys(num_romanos)
      .map(Number)
      .sort((a, b) => b - a);
    for (const value of keys) {
      while (num >= value) {
        resultado += num_romanos[value];
        num -= value;
      }
    }
    this.arr_conversion.push({ input: this.num_ingresado, output: resultado });

    console.log(this.arr_conversion);
  }
}
