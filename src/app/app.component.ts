import { Component } from '@angular/core';

export class RowData{
  constructor(public id: Number, public name:String){

  }
}

@Component({
 selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  obj={"id":"12", "name":"anna"}
  obj2={"id":12, "name":"anna"}
  row:RowData
  row_: RowData
 onClick(){
  debugger
  this.row=  new RowData(Number(this.obj.id),this.obj.name)
  this.row_= new RowData(this.obj2.id,this.obj2.name)
 }
 compare(){
   return JSON.stringify(this.row)==JSON.stringify(this.row_)
 }
debugger
}
