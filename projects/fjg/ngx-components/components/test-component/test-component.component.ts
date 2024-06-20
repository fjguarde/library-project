import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'fjg-test-component',
  template: `<div>Heavy Component using luxon today {{today}}</div>`
})
export class TestComponentComponent {
  public today = DateTime.now();
}
