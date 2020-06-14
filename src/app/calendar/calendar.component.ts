import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './../doctor/doctor.model';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {

  constructor(private ds:DataStorageService){}

  calendarPlugins = [dayGridPlugin];

  Appointment : Observable<Recipe[]> = this.ds.fetchRecipes();
  res : Recipe[];
  calendarEvents = [
  ];

  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }

  ngOnInit(){
    this.Appointment.subscribe(res=>{
      this.res=(res);
      for(let f of this.res){
        let date = f.name;
        for(let ff of f.ingredients){
          let app = ff.name;
          this.calendarEvents = this.calendarEvents.concat({ title: app, date: date })
        }
      }
    })
  }





}
