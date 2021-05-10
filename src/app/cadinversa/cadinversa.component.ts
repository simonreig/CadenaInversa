import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadinversa',
  templateUrl: './cadinversa.component.html',
  styleUrls: ['./cadinversa.component.css']
})
export class CadinversaComponent{

 
  cadenaVieja: string="";
  cadenaNueva: string="";
  x:number = 0;


  enviado(form:NgForm){
    if(form.invalid){
      return;
    }
    else{
      this.cadenaNueva="";
      this.x = this.cadenaVieja.length;
      while ( this.x>=0) {
        this.cadenaNueva = this.cadenaNueva + this.cadenaVieja.charAt(this.x);
        this.x--;
      }
    }
  }


  borrar(){
    this.cadenaNueva = '';
    this.cadenaVieja = '';
  }

}