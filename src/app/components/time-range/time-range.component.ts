import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { APPOINTMENT, CONTENT } from '../../models/appointment';


@Component({
  selector: 'time-range',
  templateUrl: './time-range.component.html',
  styleUrls: ['./time-range.component.scss'],
  standalone:true,
  imports:[
    DragDropModule,
    CommonModule
  ]
})

export class TimeRangeComponent {
  

  appointments:APPOINTMENT[] = [
    {time:{hour:0,type:'am'},contents:[]},
    {time:{hour:1,type:'am'},contents:[]},
    {time:{hour:2,type:'am'},contents:[]},
    {time:{hour:3,type:'am'},contents:[]},
    {time:{hour:4,type:'am'},contents:[]},
    {time:{hour:5,type:'am'},contents:[]},
    {time:{hour:6,type:'am'},contents:[]},
    {time:{hour:7,type:'am'},contents:[]},
    {time:{hour:8,type:'am'},contents:[]},
    {time:{hour:9,type:'am'},contents:[]},
    {time:{hour:10,type:'am'},contents:[]},
    {time:{hour:11,type:'am'},contents:[]},
    {time:{hour:12,type:'pm'},contents:[]},
    {time:{hour:1,type:'pm'},contents:[]},
    {time:{hour:2,type:'pm'},contents:[]},
    {time:{hour:3,type:'pm'},contents:[]},
    {time:{hour:4,type:'pm'},contents:[]},
    {time:{hour:5,type:'pm'},contents:[]},
    {time:{hour:6,type:'pm'},contents:[]},
    {time:{hour:7,type:'pm'},contents:[]},
    {time:{hour:8,type:'pm'},contents:[]},
    {time:{hour:9,type:'pm'},contents:[]},
    {time:{hour:10,type:'pm'},contents:[]},
    {time:{hour:11,type:'pm'},contents:[]},
    
  ];
  @Input() set content(value:CONTENT|null){
    if(value){
      this.appointments[this.appointments.findIndex(element => element.time == value.time)].contents.push(value) 
    }
  }
  dropGroup(event: CdkDragDrop<APPOINTMENT[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }
  dropItem(event: CdkDragDrop<CONTENT[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  getConnectedLists(){
    return this.appointments.map(el => el.time.hour+el.time.type);
  }


}
