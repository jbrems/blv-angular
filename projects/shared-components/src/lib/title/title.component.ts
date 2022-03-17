import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'blv-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class BlvTitleComponent {
  @Input() public content: string;

  constructor() { }
}
