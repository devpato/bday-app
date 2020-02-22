import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bday-form',
  templateUrl: './bday-form.component.html',
  styleUrls: ['./bday-form.component.scss']
})
export class BdayFormComponent implements OnInit {
  question: Observable<string>;
  month: string

  questions = [
    `What is your name?`,
    `What is your birth month?`,
    `What day in ${this.month} were you born?`,
    `What to add an other birth day`
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
