import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  headerIconName = 'dashboard';

  @Input()
  headerTitle = 'Header Title';

  @Input()
  actionTemplate: TemplateRef<HTMLElement> | undefined;

  @Input()
  actionTemplateContext: any;
}
