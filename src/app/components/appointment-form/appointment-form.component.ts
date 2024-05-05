import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { Observable, fromEvent, switchMap } from 'rxjs';
import { CONTENT } from 'src/app/models/appointment';
import { ContentService } from 'src/app/services/content.service';


@Component({
  selector: 'appointment-form.component',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})

export class AppointmentFormComponent implements AfterViewInit {

  @ViewChild('submit') submit!:ElementRef;


  $submitForm!:any;
  appointmentForm = this._fb.group({
    title:this._fb.nonNullable.control<string>('',{validators:[Validators.required]}),
    description:this._fb.nonNullable.control<string>('', {validators:[Validators.required,Validators.maxLength(250)]}),
    time:this._fb.nonNullable.control<string>('',{validators:Validators.required})
})
  
  constructor(
    public dialogRef:MatDialogRef<AppointmentFormComponent>,
    private _fb:FormBuilder,
    private _contentService:ContentService){}


  

ngAfterViewInit(): void {
  //this.$submitForm = fromEvent(this.submit.nativeElement,'click');
  //console.log(this.submit.nativeElement)
  fromEvent(this.submit.nativeElement,'click').subscribe(
    ()=>{
      let newContent:CONTENT = {title:'',description:'',time:{hour:0,type:'am'}};
      newContent.title = this.appointmentForm.controls.title.value;
      newContent.description = this.appointmentForm.controls.title.value;
      newContent.time = +this.appointmentForm.controls.time.value.split(':')[0] > 12 ? {hour:+this.appointmentForm.controls.time.value.split(':')[0]-12,type:'pm'} : {hour:+this.appointmentForm.controls.time.value.split(':')[0],type:'am'}
      this._contentService.addContent(newContent)
    }
  )
}


}
