import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'appointment-form.component',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})

export class AppointmentFormComponent {
  
  constructor(
    public dialogRef:MatDialogRef<AppointmentFormComponent>,
    private _fb:FormBuilder){}


  appointmentForm = this._fb.group({
    title:this._fb.control<string | null>(null,{validators:[Validators.required]}),
    description:this._fb.control<string | null>(null , {validators:[Validators.required,Validators.maxLength(250)]}),
    time:this._fb.control(null,{validators:Validators.required})
})

addAppointment(){
  console.log(this.appointmentForm.value)
}

}
