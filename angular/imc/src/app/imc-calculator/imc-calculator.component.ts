import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.component.html',
  styleUrls: ['./imc-calculator.component.css']
})
export class ImcCalculatorComponent implements OnInit {

  height: number = 1;
  weight: number = 0;
  imc: number = 0

  constructor() {
    this.height=1;
    this.weight=0;
    this.calculateImc();
  }
  calculateImc(){
    this.imc=this.weight/(this.height**2)
  }
  changeWeight(weight){
    this.weight = +weight;
    this.calculateImc();
  }
  changeHeight(height){
    this.height = +height;
    console.log('get height');
    this.calculateImc();
  }

  ngOnInit(): void {
  }

}
