import { Subscription } from 'rxjs';
import { DataStorageService } from './shared/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    private ds : DataStorageService,
  ) {}

  cascade;
  sub : Subscription

  ngOnInit() {
    this.authService.autoLogin();
    this.sub=this.ds.cascade.subscribe(res => {
      this.cascade = res;
    }, error =>{
      console.log(error)
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
