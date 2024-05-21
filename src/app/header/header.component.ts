import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MultiServiceService } from '../service/multi-service.service';
import { CountPipe } from '../pipes/count.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CountPipe],
  templateUrl: './header.component.html',
  styles: ``,
  providers : [MultiServiceService]  
})
export class HeaderComponent {
  @Input()
  someText = 'some';

  @Output()
  childData = new EventEmitter<string>();

  passdata(val:any){
    this.childData.emit(val);
  }
}
