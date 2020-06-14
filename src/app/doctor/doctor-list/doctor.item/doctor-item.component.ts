import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../doctor.model';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }
}
