import { CalendarComponent } from './calendar/calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
//import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
@NgModule({
  declarations: [AppComponent, HeaderComponent,
    CalendarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FullCalendarModule
    //ScheduleModule
  ],
  bootstrap: [AppComponent],
  //providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService]
})
export class AppModule {}
