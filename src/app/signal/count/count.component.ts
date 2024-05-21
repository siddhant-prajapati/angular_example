import { Component, Signal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
  count = signal(0);

  counter:number = 0;
// Signals are getter functions - calling them reads their value.
  showSignal(){
    // Signals are getter functions - calling them reads their value.
    const showCount = signal(false);
    let num : any = sessionStorage.getItem("count");
    //const conditionalCount = computed(() => {
      const doubleCount: Signal<number> = computed(() => this.count() * 2);
    //   if (showCount()) {
    //     console.log(`The count is ${doubleCount}.`)
    //   } else {
    //     console.log('Nothing to see here!');
    //   }
    // });
    console.log(doubleCount() )
    this.counter = this.count()
  }

  increaseCount(){
    this.count.update(val => val + 1)
    this.counter = this.count()
  }

  setCount(val : any){
    this.count.set(val)
    sessionStorage.setItem("count", this.count.toString())
    this.counter = this.count()
  }

  decreaseCount(){
    this.count.update(val => val - 1)
    this.counter = this.count()
  }
}


