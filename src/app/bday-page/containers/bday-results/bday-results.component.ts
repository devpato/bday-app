import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-bday-results',
  templateUrl: './bday-results.component.html',
  styleUrls: ['./bday-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BdayResultsComponent {
  @Input() results: User;
  @Output() done = new EventEmitter();

  constructor() { }

  onDone(): void {
    this.done.emit();
  }
}
