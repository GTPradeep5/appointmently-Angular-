import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert("click top right at Manage ---> fetch data to get data from database \n To save data on database click manage-->save")
  }

}
