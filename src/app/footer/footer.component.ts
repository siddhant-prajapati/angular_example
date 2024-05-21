import { Component, ElementRef, HostListener, Input, ViewChild, inject } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiServiceService } from '../service/multi-service.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './footer.component.html',
  styles: ``,
  providers : [MultiServiceService]  
})
export class FooterComponent {
  @ViewChild('txt') SearchInputEle: ElementRef | undefined;
  viewData: any;
  changeText(){
    this.viewData = this.SearchInputEle?.nativeElement.value;
  }

  multiService = inject(MultiServiceService)
   numList : any[] = this.multiService.showData()  ;
  addNumber(n:any){
    this.multiService.addData(n)
    this.numList=this.multiService.showData()
    console.log(this.numList)
  }

  

}
