import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { CardUser, UserName } from './models/card-user';

@Component({
  selector: 'fjg-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardUserComponent {

  @Input() user!: CardUser;
  @Input() check: boolean = false
  @Input() cardType: string = ''
  @Output() checked = new EventEmitter<UserName>()

  public onCheck(): void {
    this.checked.emit(this.user?.name)
  }
}
