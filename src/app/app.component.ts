import { Component, Input, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AboutComponent } from './about/about.component';
import { CountComponent } from './signal/count/count.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    HighlightDirective,
     RouterLink,
     UpperCasePipe,
     DashboardComponent,
     AboutComponent,
     CountComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("Change implemented")
  //   if(this.renderdata==="block"){
  //     this.renderdata = "none"
  //   } else {
  //     this.renderdata = "block"
  //   }
  // }
  renderdata:string =""
  ngOnInit(): void {
    
  }
  address:any;
  OnFormSubmmited(form : NgForm){
    console.log(form.value.firstName)
    console.log(form.value.lastName)
    console.log(form.value.email)
    console.log(form.value.phoneNumber)
    console.log(form.value.dob)
    console.log(form.value.address)
    this.address = form.value.address
  }

  //find average of biggest number from each array
  private numArray = [
    [43,65,31,53,71],
    [83,20,35,94,22],
    [28,42, 35,75,22],
    [57,82,41,53,13],
    [25,64,13,66,29]
  ]
  findMaxNumber(arr: number[]){
    return Math.max(...arr)
  }

  findAverage(arr: number[]){
    let sum = arr.reduce((a,b) => a+b,0)
    return sum/arr.length
  }

  result:number=0
  startOperation(){
    debugger
    let arrOfMax = []
    for(let i=0 ; i<this.numArray.length ; i++){
      arrOfMax.push(this.findMaxNumber(this.numArray[i]))
    }
    this.result= this.findAverage(arrOfMax)
  }
    
  cdata:any;
  showData(val:any){
    debugger
    this.cdata = val.value
  }


}