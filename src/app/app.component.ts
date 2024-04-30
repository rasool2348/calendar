import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

export type Time = {
  hour:string;
}
export type Appointment = {
  hour:string;
  events:string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'calendar';

  timeRange:Time[] = [
    {hour:''},
    {hour:'1 AM'},
    {hour:'2 AM'},
    {hour:'3 AM'},
    {hour:'4 AM'},
    {hour:'5 AM'},
    {hour:'6 AM'},
    {hour:'7 AM'},
    {hour:'8 AM'},
    {hour:'9 AM'},
    {hour:'10 AM'},
    {hour:'11 AM'},
    {hour:'12 PM'},
    {hour:'1 PM'},
    {hour:'2 PM'},
    {hour:'3 PM'},
    {hour:'4 PM'},
    {hour:'5 PM'},
    {hour:'6 PM'},
    {hour:'7 PM'},
    {hour:'8 PM'},
    {hour:'9 PM'},
    {hour:'10 PM'},
    {hour:'11 PM'},

    
    
  ];

  appointments:Appointment[] = [
    {hour:'',events:[]},
    {hour:'1 AM',events:[]},
    {hour:'2 AM',events:[]},
    {hour:'3 AM',events:[]},
    {hour:'4 AM',events:[]},
    {hour:'5 AM',events:[]},
    {hour:'6 AM',events:[]},
    {hour:'7 AM',events:[]},
    {hour:'8 AM',events:['red']},
    {hour:'9 AM',events:[]},
    {hour:'10 AM',events:['blue']},
    {hour:'11 AM',events:[]},
    {hour:'12 PM',events:[]},
    {hour:'1 PM',events:[]},
    {hour:'2 PM',events:[]},
    {hour:'3 PM',events:[]},
    {hour:'4 PM',events:[]},
    {hour:'5 PM',events:[]},
    {hour:'6 PM',events:[]},
    {hour:'7 PM',events:[]},
    {hour:'8 PM',events:[]},
    {hour:'9 PM',events:[]},
    {hour:'10 PM',events:[]},
    {hour:'11 PM',events:[]},
  ];

  addAppointment(index:number){
    this.selected = index;
  }
  drop(event: CdkDragDrop<Appointment[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }
  calcMarginTop(index:number){
    return (index+1)*5 + 'vh'
  }

  selected:number | null = null;

  

}
